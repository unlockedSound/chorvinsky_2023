import React from "react";
import IntroText from "../IntroElements/IntroText";
import Timeline from "../IntroElements/Timeline";

const IntroSection = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="relative lg:pt-16 pb-4 md:pb-14 overflow-hidden">

                    <div className="relative">
                        <div
                            className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <IntroText/>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div
                                    className="sm:pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">

                                    <Timeline/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default IntroSection;
