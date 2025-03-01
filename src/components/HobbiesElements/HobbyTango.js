import React from "react";

const HobbyTango = () => {
    return (
        <p>
            <div
                className="text-2xl font-bold text-white flex justify-start">
                <div
                    className="my-auto">
                    <img src="tango.png" alt="two dancers in Argentine Tango pose"
                         className="h-8 w-none max-w-none pr-2"/>
                </div>
                <span
                    className="block text-2xl font-bold text-white">Tanguero and Organizer</span>
            </div>
            <span className="mt-1 block text-base text-gray-300">Picking up Argentine Tango in the Fall of 2010 I have danced more nights away than I can count. Some of those nights spent at my own events from house parties to festivals with a few hundred people.</span>
        </p>
    );
};

export default HobbyTango;
