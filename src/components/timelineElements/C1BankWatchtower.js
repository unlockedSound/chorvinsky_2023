import React from "react";

const C1BankWatchtower = () => {
    return (
        <li>
            <div className="relative pb-8">
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
                                As part of <span className="font-medium text-gray-900 dark:text-gray-100"> Capital One's </span>
                                Retail Bank organization led the creation and expansion of the
                                <span className="font-medium text-gray-900 dark:text-gray-100"> Bank Decisioning Platform </span>
                                to enable a wide range of use cases across Fraud,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default C1BankWatchtower;
