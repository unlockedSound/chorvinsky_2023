import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800" aria-labelledby="footer-heading">
            <div className="max-w-7xl mx-auto pb-5 px-4 sm:px-6 lg:px-8 pt-4">
                <div
                    className="border-gray-200 dark:border-gray-900 md:flex md:items-center md:justify-between">

                    <p className="mt-8 text-base text-gray-400 dark:text-gray-100 md:mt-0 md:order-1">
                        &copy; 2025 David Chorvinsky, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
