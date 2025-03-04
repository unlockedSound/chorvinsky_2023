import React from "react";

const C1CardRulesLab = () => {
    return (
        <li>
            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                <img className="p-1.5" alt="Capital One Finance Logo" src="CapitalOneBang.png"/>
            </span>
                    </div>
                    <div
                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-11/12">
                        <div className="w-72 sm:w-2/3 lg:w-11/12">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Stepped into a role with <span
                                className="font-medium text-gray-900 dark:text-gray-100"> Capital One's </span>
                                Credit Card organization managing and growing their <span
                                className="font-medium text-gray-900 dark:text-gray-100">"Rules as a Service" platform</span>
                                 powering card authorization and credit line decisioning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default C1CardRulesLab;
