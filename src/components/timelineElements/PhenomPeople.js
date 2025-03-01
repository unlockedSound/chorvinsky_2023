import React from "react";

const PhenomPeople = () => {
    return (
        <li>
            <div className="relative pb-8">
                                                                 <span
                                                                     className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                     aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img
                className="p-1.5" alt="Phenom company logo" src="phenom_logo.png"/>
            </span>
                    </div>
                    <div
                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                        <div className="w-72 sm:w-2/3 lg:w-none">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Joined <span
                                className="font-medium text-gray-900 dark:text-gray-100">Phenom </span><span
                                className="italic">formerly <span
                                className="text-gray-700 dark:text-gray-400">Phenom People </span></span>
                                as <span
                                className="font-medium text-gray-900 dark:text-gray-100">Lead Product Manager </span> for
                                their
                                <span
                                    className="font-medium text-gray-900 dark:text-gray-100"> Customer Experience platform </span>
                            </p>
                        </div>
                        <div
                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                            <p>Winter 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PhenomPeople;
