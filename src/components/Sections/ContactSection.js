import React from "react";

const ContactSection = () => {
    return (
        <div className="bg-gradient-to-r from-white to-white dark:from-gray-800 dark:to-indigo-900">
            <div
                className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                    <span className="block">Want to get in touch?</span>
                    <span
                        className="block bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-indigo-500 dark:to-purple-300 bg-clip-text text-transparent">Feel free to reach out if you would be interested in learning more about myself, my projects, or you think I might be a good fit for one of your own.</span>
                </h2>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                    <a rel="noopener noreferrer" href="mailto:david@chorvinsky.com"
                       className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 dark:text-indigo-50 bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-800">
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
