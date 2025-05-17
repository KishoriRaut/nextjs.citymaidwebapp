// Import Supabase client and admin emails
import { supabase, ADMIN_EMAILS } from '../config.js';

// Check if user is authenticated and is an admin
export async function checkAdminAuth() {
    try {
        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError || !session) {
            redirectToLogin();
            return false;
        }

        // Get user from session
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError || !user) {
            redirectToLogin();
            return false;
        }

        // Check if user email is in admin list
        const isAdmin = ADMIN_EMAILS.includes(user.email);
        
        if (!isAdmin) {
            // Redirect to access denied if not an admin
            window.location.href = 'access-denied.html';
            return false;
        }

        // Update UI with admin info
        updateAdminUI(user);
        
        return true;
    } catch (error) {
        console.error('Auth check error:', error);
        redirectToLogin();
        return false;
    }
}

// Redirect to login page with redirect URL
function redirectToLogin() {
    const currentPath = window.location.pathname;
    window.location.href = `../auth/login.html?redirect=${encodeURIComponent(currentPath)}`;
}

// Update UI with admin information
function updateAdminUI(user) {
    try {
        // Update admin name in the header
        const adminNameElement = document.getElementById('adminName');
        if (adminNameElement) {
            adminNameElement.textContent = user.email.split('@')[0];
        }
        
        // Set up logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                await adminLogout();
            });
        }
    } catch (error) {
        console.error('Error updating admin UI:', error);
    }
}

// Logout function
export async function adminLogout() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        window.location.href = '../auth/login.html';
    } catch (error) {
        console.error('Logout error:', error);
        // Still redirect to login even if there's an error
        window.location.href = '../auth/login.html';
    }
}

// Check auth status when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const isAuthenticated = await checkAdminAuth();
    
    if (isAuthenticated) {
        // Additional initialization for authenticated admin
        console.log('Admin user authenticated');
        const userEmailElement = document.getElementById('admin-email');
        if (userEmailElement) {
            userEmailElement.textContent = user.email;
        }
        
        // Set up logout button
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', adminLogout);
        }
    }
});
