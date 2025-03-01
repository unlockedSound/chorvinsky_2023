import React from "react";

const HobbyWarlock = () => {
    return (
        <p>
            <div className="text-2xl font-bold text-white flex justify-start">

                <div className=" my-auto">
                    <img src="warlock.png" className="h-8 pr-2"
                         alt="warlock class icon"/>
                </div>
                <span
                    className="block text-2xl font-bold text-white">High Ranked Warlock</span>
            </div>
            <span className="mt-1 block text-base text-gray-300">Peaked at rank 300 for Mythic+ Warlocks in World of Warcraft staying consistently within the top .5% of all Warlock during Shadowlands season 1 and 2.</span>

        </p>
    );
};

export default HobbyWarlock;
