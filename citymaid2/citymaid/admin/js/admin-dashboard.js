// Admin Dashboard - Job Listings Management
import { supabase } from '../../config.js';
import { checkAdminAuth } from '../admin-auth.js';

// Global state
let currentPage = 1;
const itemsPerPage = 10;
let allJobs = [];
let filteredJobs = [];
let currentSort = { column: 'created_at', order: 'desc' };
let currentJobId = null;
let statusFilter = 'all';
let typeFilter = 'all';
let searchTerm = '';

// DOM Elements
const jobsTable = document.getElementById('jobsTable');
const jobsTableBody = document.getElementById('jobsTableBody');
const searchInput = document.getElementById('searchInput');
const statusFilterElement = document.getElementById('statusFilter');
const jobTypeFilterElement = document.getElementById('typeFilter');
const pagination = document.getElementById('pagination');
const loadingIndicator = document.getElementById('loadingIndicator');
const startCount = document.getElementById('startCount');
const endCount = document.getElementById('endCount');
const totalJobs = document.getElementById('totalJobs');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const clearFiltersBtn = document.getElementById('clearFilters');
const addJobBtn = document.getElementById('addJobBtn');
const jobForm = document.getElementById('jobForm');
const jobFormTitle = document.getElementById('jobFormTitle');
const jobIdInput = document.getElementById('jobId');

// Job type and status options
const JOB_STATUSES = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'filled', label: 'Filled' },
    { value: 'closed', label: 'Closed' },
    { value: 'expired', label: 'Expired' }
];

const JOB_TYPES = [
    { value: 'regular', label: 'Regular' },
    { value: 'one-time', label: 'One-time' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'live-in', label: 'Live-in' }
];

// Initialize the dashboard
async function initDashboard() {
    try {
        // Check admin authentication
        const isAdmin = await checkAdminAuth();
        if (!isAdmin) return;
        
        // Parse URL parameters
        parseURLParams();
        
        // Load initial data
        await loadJobs();
        
        // Set up event listeners
        setupEventListeners();
        
        // Update UI
        updateFilterBadges();
        
        // Show the content
        document.body.classList.remove('opacity-0');
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showError('Failed to initialize dashboard. Please try again.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

// Set up event listeners
function setupEventListeners() {
    // Filter and search
    if (statusFilterElement) {
        statusFilterElement.addEventListener('change', (e) => {
            statusFilter = e.target.value;
            applyFilters();
        });
    }
    
    if (jobTypeFilterElement) {
        jobTypeFilterElement.addEventListener('change', (e) => {
            typeFilter = e.target.value;
            applyFilters();
        });
    }
    
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                handleSearch(e);
            }, 300);
        });
    }
    
    // Pagination
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    }
    
    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // Add new job
    if (addJobBtn) {
        addJobBtn.addEventListener('click', () => {
            // Reset form and show modal
            const form = document.getElementById('jobForm');
            if (form) form.reset();
            currentJobId = null;
            
            const formTitle = document.getElementById('formTitle');
            if (formTitle) formTitle.textContent = 'Add New Job';
            
            const submitBtn = document.getElementById('submitBtn');
            if (submitBtn) submitBtn.textContent = 'Add Job';
            
            // Show modal using Bootstrap
            const modalEl = document.getElementById('jobFormModal');
            if (modalEl) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        });
    }
    
    // Close modal buttons
    document.querySelectorAll('[data-modal-hide]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-hide');
            const modalEl = document.getElementById(modalId);
            if (modalEl) {
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) {
                    modal.hide();
                } else {
                    // If no instance exists, create a new one and hide it
                    new bootstrap.Modal(modalEl).hide();
                }
            }
        });
    });
    
    // Form submission
    if (jobForm) {
        jobForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const jobModal = document.getElementById('jobModal');
        const jobFormModal = document.getElementById('jobFormModal');
        
        if (jobModal && e.target === jobModal) {
            jobModal.classList.add('hidden');
        }
        if (jobFormModal && e.target === jobFormModal) {
            jobFormModal.classList.add('hidden');
        }
    });
    
    // Pagination controls
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    }
    
    // Clear all filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

// Load jobs from Supabase
async function loadJobs() {
    try {
        showLoading(true);
        
        const { data: jobs, error } = await supabase
            .from('jobs')
            .select(`
                *,
                profiles (
                    id,
                    email,
                    full_name,
                    phone
                )
            `)
            .order('created_at', { ascending: false });

        if (error) throw error;

        allJobs = jobs || [];
        filteredJobs = [...allJobs];
        
        // Apply any filters from URL
        applyFilters();
        
    } catch (error) {
        console.error('Error loading jobs:', error);
        showError('Failed to load jobs. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Render jobs in the table with action buttons
function renderJobs() {
    if (!jobsTable) return;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const jobsToShow = filteredJobs.slice(startIndex, endIndex);
    
    // Update pagination info
    if (totalJobs) {
        totalJobs.textContent = filteredJobs.length;
    }
    if (startCount) {
        startCount.textContent = filteredJobs.length > 0 ? startIndex + 1 : 0;
    }
    if (endCount) {
        endCount.textContent = Math.min(endIndex, filteredJobs.length);
    }
    
    // Toggle no jobs message
    if (noJobsMessage) {
        noJobsMessage.classList.toggle('hidden', filteredJobs.length > 0);
    }
    
    // Clear existing rows
    while (jobsTable.rows.length > 1) {
        jobsTable.deleteRow(1);
    }
    
    // Add job rows with action buttons
    jobsToShow.forEach(job => {
        const row = jobsTable.insertRow();
        
        // ID cell (truncated)
        const idCell = row.insertCell();
        idCell.textContent = job.id.substring(0, 8) + '...';
        idCell.className = 'py-4 px-6 text-sm text-gray-500';
        
        // Title cell with link to view
        const titleCell = row.insertCell();
        const titleLink = document.createElement('a');
        titleLink.href = '#';
        titleLink.className = 'text-blue-600 hover:underline';
        titleLink.textContent = job.title;
        titleLink.onclick = (e) => {
            e.preventDefault();
            viewJob(job.id);
        };
        titleCell.className = 'py-4 px-6';
        titleCell.appendChild(titleLink);
        
        // Type cell with badge
        const typeCell = row.insertCell();
        const typeBadge = document.createElement('span');
        typeBadge.className = 'px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
        typeBadge.textContent = JOB_TYPES.find(t => t.value === job.job_type)?.label || job.job_type;
        typeCell.className = 'py-4 px-6';
        typeCell.appendChild(typeBadge);
        
        // Location cell
        const locationCell = row.insertCell();
        locationCell.textContent = job.location;
        locationCell.className = 'py-4 px-6';
        
        // Status cell with colored badge
        const statusCell = row.insertCell();
        const statusBadge = document.createElement('span');
        statusBadge.className = `px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(job.status)}`;
        statusBadge.textContent = job.status.charAt(0).toUpperCase() + job.status.slice(1);
        statusCell.appendChild(statusBadge);
        statusCell.className = 'py-4 px-6';
        
        // Date cell
        const dateCell = row.insertCell();
        dateCell.textContent = formatDate(job.created_at);
        dateCell.className = 'py-4 px-6 text-sm text-gray-500';
        
        // Actions cell with buttons
        const actionsCell = row.insertCell();
        actionsCell.className = 'py-4 px-6';
        
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'flex items-center space-x-2';
        
        // View button
        const viewBtn = document.createElement('button');
        viewBtn.className = 'p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition-colors';
        viewBtn.title = 'View Details';
        viewBtn.innerHTML = '<i class="fas fa-eye w-4 h-4"></i>';
        viewBtn.onclick = () => viewJob(job.id);
        
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-yellow-600 transition-colors';
        editBtn.title = 'Edit Job';
        editBtn.innerHTML = '<i class="fas fa-pen w-4 h-4"></i>';
        editBtn.onclick = () => editJob(job.id);
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-colors';
        deleteBtn.title = 'Delete Job';
        deleteBtn.innerHTML = '<i class="fas fa-trash w-4 h-4"></i>';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteJob(job.id);
        };
        
        actionsContainer.appendChild(viewBtn);
        actionsContainer.appendChild(editBtn);
        actionsContainer.appendChild(deleteBtn);
        actionsCell.appendChild(actionsContainer);
    });
    
    // Update pagination buttons
    if (prevPageBtn) {
        prevPageBtn.disabled = currentPage === 1;
        prevPageBtn.classList.toggle('opacity-50', currentPage === 1);
        prevPageBtn.classList.toggle('cursor-not-allowed', currentPage === 1);
    }
    if (nextPageBtn) {
        nextPageBtn.disabled = endIndex >= filteredJobs.length;
        nextPageBtn.classList.toggle('opacity-50', endIndex >= filteredJobs.length);
        nextPageBtn.classList.toggle('cursor-not-allowed', endIndex >= filteredJobs.length);
    }
}

// Helper function to escape HTML
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return unsafe;
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Debounce function to limit how often a function is called
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Helper function to get status badge class
function getStatusBadgeClass(status) {
    const statusClasses = {
        active: 'bg-green-100 text-green-800',
        pending: 'bg-yellow-100 text-yellow-800',
        rejected: 'bg-red-100 text-red-800',
        completed: 'bg-blue-100 text-blue-800',
        expired: 'bg-gray-100 text-gray-800',
        filled: 'bg-purple-100 text-purple-800',
        closed: 'bg-gray-100 text-gray-800'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
}

// Format date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
        return 'Invalid date';
    }
}

// Show loading indicator
function showLoading(show) {
    if (loadingIndicator) {
        loadingIndicator.classList.toggle('hidden', !show);
    }
}

// Show error message
function showError(message) {
    // You can implement a toast notification or alert here
    console.error(message);
    alert(message);
}

// View job details
async function viewJob(jobId) {
    try {
        showLoading(true);
        
        const { data: job, error } = await supabase
            .from('jobs')
            .select(`
                *,
                profiles:employer_id (
                    id,
                    full_name,
                    email,
                    phone
                )
            `)
            .eq('id', jobId)
            .single();
            
        if (error) throw error;
        
        // Populate modal with job details
        document.getElementById('jobTitle').textContent = job.title;
        document.getElementById('jobEmployer').textContent = job.profiles?.full_name || 'N/A';
        document.getElementById('jobEmail').textContent = job.profiles?.email || 'N/A';
        document.getElementById('jobPhone').textContent = job.profiles?.phone || 'N/A';
        document.getElementById('jobLocation').textContent = job.location || 'N/A';
        document.getElementById('jobType').textContent = JOB_TYPES.find(t => t.value === job.job_type)?.label || job.job_type;
        document.getElementById('jobStatus').innerHTML = `
            <span class="${getStatusBadgeClass(job.status)}">
                ${job.status.charAt(0).toUpperCase() + job.status.slice(1)}
            </span>`;
        document.getElementById('jobRate').textContent = `$${job.hourly_rate}/hour`;
        document.getElementById('jobDescription').innerHTML = job.description.replace(/\n/g, '<br>');
        document.getElementById('jobCreatedAt').textContent = formatDate(job.created_at);
        document.getElementById('jobUpdatedAt').textContent = formatDate(job.updated_at);
        
        // Show the modal
        document.getElementById('jobModal').classList.remove('hidden');
    } catch (error) {
        console.error('Error viewing job:', error);
        showError('Failed to load job details. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Edit job
async function editJob(jobId) {
    try {
        showLoading(true);
        currentJobId = jobId;
        
        // If jobId is provided, load existing job data
        if (jobId) {
            const { data: job, error } = await supabase
                .from('jobs')
                .select('*')
                .eq('id', jobId)
                .single();
                
            if (error) throw error;
            
            // Populate form with job data
            document.getElementById('editJobTitle').value = job.title;
            document.getElementById('editJobDescription').value = job.description;
            document.getElementById('editJobLocation').value = job.location;
            document.getElementById('editJobType').value = job.job_type;
            document.getElementById('editJobStatus').value = job.status;
            document.getElementById('editHourlyRate').value = job.hourly_rate;
            document.getElementById('jobId').value = job.id;
            
            document.getElementById('jobFormTitle').textContent = 'Edit Job';
        } else {
            // Reset form for new job
            document.getElementById('jobForm').reset();
            document.getElementById('jobId').value = '';
            document.getElementById('jobFormTitle').textContent = 'Add New Job';
        }
        
        // Show the form modal
        document.getElementById('jobFormModal').classList.remove('hidden');
    } catch (error) {
        console.error('Error preparing job form:', error);
        showError('Failed to load job data. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Delete job with confirmation
async function deleteJob(jobId) {
    try {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4F46E5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
        
        if (result.isConfirmed) {
            showLoading(true);
            
            const { error } = await supabase
                .from('jobs')
                .delete()
                .eq('id', jobId);
                
            if (error) throw error;
            
            // Update UI
            allJobs = allJobs.filter(job => job.id !== jobId);
            filteredJobs = filteredJobs.filter(job => job.id !== jobId);
            renderJobs();
            
            await Swal.fire(
                'Deleted!',
                'The job has been deleted.',
                'success'
            );
        }
    } catch (error) {
        console.error('Error deleting job:', error);
        showError('Failed to delete job. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    try {
        showLoading(true);
        
        const formData = new FormData(e.target);
        const jobData = {
            title: formData.get('title'),
            description: formData.get('description'),
            location: formData.get('location'),
            job_type: formData.get('job_type'),
            status: formData.get('status'),
            hourly_rate: parseFloat(formData.get('hourly_rate'))
        };
        
        // Validate required fields
        if (!jobData.title || !jobData.description || !jobData.location) {
            throw new Error('Please fill in all required fields');
        }
        
        const jobId = formData.get('job_id');
        let result;
        
        if (jobId) {
            // Update existing job
            const { data, error } = await supabase
                .from('jobs')
                .update({
                    ...jobData,
                    updated_at: new Date().toISOString()
                })
                .eq('id', jobId)
                .select();
                
            if (error) throw error;
            result = data[0];
            
            // Update local state
            const index = allJobs.findIndex(job => job.id === jobId);
            if (index !== -1) {
                allJobs[index] = { ...allJobs[index], ...result };
            }
            
            showSuccess('Job updated successfully!');
        } else {
            // Create new job
            const { data, error } = await supabase
                .from('jobs')
                .insert([{
                    ...jobData,
                    employer_id: (await supabase.auth.getUser()).data.user.id,
                    status: 'pending'
                }])
                .select();
                
            if (error) throw error;
            result = data[0];
            
            // Update local state
            allJobs.unshift(result);
            showSuccess('Job created successfully!');
        }
        
        // Update filtered jobs and re-render
        applyFilters();
        
        // Close the modal
        document.getElementById('jobFormModal').classList.add('hidden');
    } catch (error) {
        console.error('Error saving job:', error);
        showError(error.message || 'Failed to save job. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Handle search input
function handleSearch(e) {
    searchTerm = e.target.value.trim().toLowerCase();
    applyFilters();
}

// Apply filters based on current selections
function applyFilters() {
    filteredJobs = allJobs.filter(job => {
        // Filter by status
        if (statusFilter !== 'all' && job.status !== statusFilter) {
            return false;
        }
        
        // Filter by type
        if (typeFilter !== 'all' && job.job_type !== typeFilter) {
            return false;
        }
        
        // Filter by search term
        if (searchTerm) {
            const searchFields = [
                job.title,
                job.description,
                job.location,
                job.profiles?.full_name || '',
                job.profiles?.email || ''
            ];
            
            return searchFields.some(field => 
                field && field.toString().toLowerCase().includes(searchTerm)
            );
        }
        
        return true;
    });
    
    // Update URL with current filters
    updateURLWithFilters();
    
    // Reset to first page and re-render
    currentPage = 1;
    renderJobs();
    updateFilterBadges();
}

// Update URL with current filters
function updateURLWithFilters() {
    const params = new URLSearchParams();
    
    if (statusFilter !== 'all') params.set('status', statusFilter);
    if (typeFilter !== 'all') params.set('type', typeFilter);
    if (searchTerm) params.set('search', searchTerm);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
}

// Parse URL parameters on page load
function parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    
    // Set filters from URL
    statusFilter = params.get('status') || 'all';
    typeFilter = params.get('type') || 'all';
    searchTerm = params.get('search') || '';
    
    // Update form controls
    if (statusFilter !== 'all' && statusFilter) {
        const statusSelect = document.getElementById('statusFilter');
        if (statusSelect) statusSelect.value = statusFilter;
    }
    
    if (typeFilter !== 'all' && typeFilter) {
        const typeSelect = document.getElementById('typeFilter');
        if (typeSelect) typeSelect.value = typeFilter;
    }
    
    if (searchTerm) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = searchTerm;
    }
}

// Clear all filters
function clearAllFilters() {
    statusFilter = 'all';
    typeFilter = 'all';
    searchTerm = '';
    
    // Reset form controls
    const statusSelect = document.getElementById('statusFilter');
    const typeSelect = document.getElementById('typeFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (statusSelect) statusSelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    if (searchInput) searchInput.value = '';
    
    // Apply filters and update URL
    applyFilters();
}

// Update filter badges in the UI
function updateFilterBadges() {
    const filterBadges = document.getElementById('filterBadges');
    if (!filterBadges) return;
    
    let badges = [];
    
    if (statusFilter !== 'all') {
        const statusLabel = JOB_STATUSES.find(s => s.value === statusFilter)?.label || statusFilter;
        badges.push(`
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Status: ${statusLabel}
                <button onclick="removeFilter('status')" class="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500">
                    <span class="sr-only">Remove status filter</span>
                    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                </button>
            </span>
        `);
    }
    
    if (typeFilter !== 'all') {
        const typeLabel = JOB_TYPES.find(t => t.value === typeFilter)?.label || typeFilter;
        badges.push(`
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Type: ${typeLabel}
                <button onclick="removeFilter('type')" class="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-500">
                    <span class="sr-only">Remove type filter</span>
                    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                </button>
            </span>
        `);
    }
    
    if (searchTerm) {
        badges.push(`
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Search: "${searchTerm}"
                <button onclick="removeFilter('search')" class="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-purple-400 hover:bg-purple-200 hover:text-purple-500">
                    <span class="sr-only">Remove search term</span>
                    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                </button>
            </span>
        `);
    }
    
    filterBadges.innerHTML = badges.length > 0 
        ? badges.join('\n')
        : '<span class="text-sm text-gray-500">No filters applied</span>';
    
    // Toggle clear all button
    const clearAllBtn = document.getElementById('clearFilters');
    if (clearAllBtn) {
        clearAllBtn.classList.toggle('hidden', badges.length === 0);
    }
}

// Remove a specific filter
function removeFilter(type) {
    switch (type) {
        case 'status':
            statusFilter = 'all';
            const statusSelect = document.getElementById('statusFilter');
            if (statusSelect) statusSelect.value = 'all';
            break;
        case 'type':
            typeFilter = 'all';
            const typeSelect = document.getElementById('typeFilter');
            if (typeSelect) typeSelect.value = 'all';
            break;
        case 'search':
            searchTerm = '';
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            break;
    }
    
    applyFilters();
}

// Change page
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredJobs.length / itemsPerPage)) {
        return;
    }
    
    currentPage = page;
    renderJobs();
    
    // Scroll to top of table
    const tableContainer = document.querySelector('.table-container');
    if (tableContainer) {
        tableContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Show success message
function showSuccess(message) {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        confirmButtonColor: '#4F46E5'
    });
}

// Make functions available globally
window.viewJob = viewJob;
window.editJob = editJob;
window.deleteJob = deleteJob;
window.changePage = changePage;
