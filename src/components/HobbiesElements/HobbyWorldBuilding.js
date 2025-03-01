import React from "react";

const WorldBuilder = () => {
    return (
<p className="">
    <div
        className="text-2xl font-bold text-white flex justify-start">
        <div
            className=" my-auto">
            <img src="dnd.png" alt="Dungeons and Dragons logo"
                 className="h-8 pr-2 max-w-none"/>
        </div>
        <span>Creator and Dungeon Master</span>
    </div>
    <span className="mt-1 block text-base text-gray-300">I've been playing, and almost exclusively running, Dungeons and Dragons campaigns since middle school. I focus on story telling and expanding my home built game world through player interaction with it. Especially deep love of <a
        rel="noopener noreferrer"
        className="font-medium text-white underline"
        href="./aldermoure.jpg">map making</a> to bring the world to life.</span>
</p>
    );
};

export default WorldBuilder;
