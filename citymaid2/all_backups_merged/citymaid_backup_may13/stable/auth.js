/**
 * Auth Service
 * Provides authentication functions for City Maid Services application
 * Handles login, registration, session management and user role handling
 */

// Use the supabaseClient from config.js which is loaded before this file
// If supabaseClient is not available, we'll create a fallback reference
if (typeof supabaseClient === 'undefined') {
    console.warn('supabaseClient not found in global scope. Using fallback client.');
    
    // Check if we can create a client
    if (typeof supabase !== 'undefined' && typeof supabaseUrl !== 'undefined' && typeof supabaseKey !== 'undefined') {
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    } else {
        console.error('Cannot initialize Supabase client. Required variables not found.');
    }
}

/**
 * Auth service object with authentication methods
 */
const auth = {
    /**
     * Sign in a user with email and password
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {Object} Response object with success flag, user data if successful, and error if any
     */
    async signIn(email, password) {
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                console.error('Login error:', error.message);
                return {
                    success: false,
                    error: error.message
                };
            }

            // Get user profile data including role
            const { data: profileData, error: profileError } = await supabaseClient
                .from('profiles')
                .select('*')
                .eq('id', data.user.id)
                .single();

            if (profileData) {
                // Add profile data to user object
                data.user.profile = profileData;
                
                // If role is not in user_metadata, set it
                if (!data.user.user_metadata || !data.user.user_metadata.role) {
                    await supabaseClient.auth.updateUser({
                        data: { role: profileData.role }
                    });
                    
                    // Update local user object
                    data.user.user_metadata = data.user.user_metadata || {};
                    data.user.user_metadata.role = profileData.role;
                }
            }

            return {
                success: true,
                user: data.user
            };
        } catch (error) {
            console.error('Unexpected login error:', error);
            return {
                success: false,
                error: 'An unexpected error occurred'
            };
        }
    },

    /**
     * Register a new user
     * @param {string} email - User email
     * @param {string} password - User password
     * @param {string} role - User role (employer, maid, admin)
     * @param {Object} profile - User profile data
     * @returns {Object} Response object with success flag, user data if successful, and error if any
     */
    async signUp(email, password, role, profile = {}) {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: role
                    }
                }
            });

            if (error) {
                console.error('Registration error:', error.message);
                return {
                    success: false,
                    error: error.message
                };
            }

            // Create profile entry with user data
            const profileData = {
                id: data.user.id,
                email: email,
                role: role,
                created_at: new Date(),
                ...profile
            };

            // Insert profile into the profiles table
            const { error: profileError } = await supabaseClient
                .from('profiles')
                .insert([profileData]);

            if (profileError) {
                console.error('Profile creation error:', profileError.message);
                // Continue since the user is created
            }

            return {
                success: true,
                user: data.user
            };
        } catch (error) {
            console.error('Unexpected registration error:', error);
            return {
                success: false,
                error: 'An unexpected error occurred'
            };
        }
    },

    /**
     * Sign out the current user
     * @returns {Object} Response object with success flag and error if any
     */
    async signOut() {
        try {
            const { error } = await supabaseClient.auth.signOut();
            
            if (error) {
                console.error('Sign out error:', error.message);
                return {
                    success: false,
                    error: error.message
                };
            }
            
            return {
                success: true
            };
        } catch (error) {
            console.error('Unexpected sign out error:', error);
            return {
                success: false,
                error: 'An unexpected error occurred'
            };
        }
    },

    /**
     * Check if user is logged in
     * @returns {boolean} True if user is logged in, false otherwise
     */
    async checkAuthStatus() {
        try {
            const { data, error } = await supabaseClient.auth.getSession();
            
            if (error || !data.session) {
                return false;
            }
            
            return true;
        } catch (error) {
            console.error('Auth status check error:', error);
            return false;
        }
    },

    /**
     * Get the current user data
     * @returns {Object|null} User object or null if not logged in
     */
    async getCurrentUser() {
        try {
            const { data, error } = await supabaseClient.auth.getUser();
            
            if (error || !data.user) {
                return null;
            }
            
            return data.user;
        } catch (error) {
            console.error('Get current user error:', error);
            return null;
        }
    },

    /**
     * Check if the current user has a specific role
     * @param {string} role - Role to check
     * @returns {boolean} True if user has the role, false otherwise
     */
    async hasRole(role) {
        try {
            const user = await this.getCurrentUser();
            
            if (!user) {
                return false;
            }
            
            return user.user_metadata && user.user_metadata.role === role;
        } catch (error) {
            console.error('Role check error:', error);
            return false;
        }
    }
};

// Export the auth object
// Make it available in global scope for non-module scripts
window.auth = auth;
