// Utility function to get initials from a username
// utils/helper.js
export const getInitials = (username) => {
    if (!username) return ""; // Return empty if username is not provided
    const parts = username.split(' ');
    return parts.map(part => part[0].toUpperCase()).join('');
};

// Utility function to validate email format
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
