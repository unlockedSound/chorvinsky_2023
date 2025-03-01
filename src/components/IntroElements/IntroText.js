import React from "react";

const IntroText = () => {
    return (
        <div
            className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
                <div>
                <span
                    className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                     </svg>
                </span>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        A drive to build;
                        <br/>
                        and unique path to product
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        My path, while having felt circuitous at the time, has given me
                        the menagerie of experience that guides.
                        Inspired by my late entrepreneurial father, a family business,
                        and the problem solving fundamentals learned studying
                        Mechanical Engineering, I have chased after whatever the
                        opportunity might be to create including: an APIs for address
                        data, a design system and
                        reusable application for local government data visualization web
                        apps, a Discord bot to analyze video
                        game economies, a specialized event registration systems, and a
                        few other projects still in the works, all while
                        spending my days working to build great products with the help
                        of talented developers.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default IntroText;
