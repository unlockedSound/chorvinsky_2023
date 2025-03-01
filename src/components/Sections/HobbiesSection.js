import React from "react";
import WorldBuidler from "../HobbiesElements/HobbyWorldBuilding";
import HobbyCooking from "../HobbiesElements/HobbyCooking";
import HobbyTango from "../HobbiesElements/HobbyTango";
import HobbyWarlock from "../HobbiesElements/HobbyWarlock";
import HobbyPhotography from "../HobbiesElements/HobbyPhotography";

const HobbiesSection = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="h-80 absolute inset-x-0 bottom-0 ">
                <div className="h-full w-full ">
                    <div className="h-full xl:relative ">
                        <img alt="David Chorvinsky dancing Argentine Tango. Photo by Nikos Z. Photography"
                             className="h-full w-full object-cover opacity-25"
                             src="tango.jpg"/>
                        <div aria-hidden="true"
                             className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 "></div>
                    </div>
                </div>
            </div>
            <div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 ">
                    <p className="mt-3 text-3xl font-extrabold bg-gradient-to-r from-purple-200 to-indigo-400 bg-clip-text text-transparent">A
                        small slice of hobbies and
                        nifty
                        tidbits</p>
                    <p className="mt-5 text-lg text-gray-300">Either as an extension of the drive to create
                        or
                        just a bit of a side hobby I find more than a few ways to stay busy</p>

                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <WorldBuidler/>
                        <HobbyCooking/>
                        <HobbyTango/>
                        <HobbyWarlock/>
                        <HobbyPhotography/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HobbiesSection;
