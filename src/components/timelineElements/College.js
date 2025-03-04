import React from "react";

const College = () => {
    return (
        <li>
            <div className="relative pb-8">
                 <span
                     className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                     aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                                <img
                className="p-1.5 rounded-full" src="umd.png" alt="University of Maryland logo"/>
            </span>
                    </div>
                    <div
                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-11/12">
                        <div className="w-72 sm:w-2/3 lg:w-11/12">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Graduated with a <span
                                className="font-medium text-gray-900 dark:text-gray-100">B.S. in GIS with Honors
                                                                                    </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default College;
