import React from "react";
import College from "../timelineElements/College";
import OCTOFrontEndDeveloper from "../timelineElements/OCTOFrontEndDeveloper";
import OCTOProductManager from "../timelineElements/OCOTProductManager";
import SpkEz from "../timelineElements/SpkEz";
import BuyersGuide from "../timelineElements/BuyersGuide";
import OCTOProgramManager from "../timelineElements/OCTOProgramManager";
import PhenomPeople from "../timelineElements/PhenomPeople";
import C1CardRulesLab from "../timelineElements/C1CardRulesLab";
import C1BankWatchtower from "../timelineElements/C1BankWatchtower";

const Timeline = () => {
    return (
        <div className="mt-12 sm:mt-16 lg:mt-0">
            <div
                className="sm:pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">

                <div className="flow-root">
                    <ul className="-mb-8">
                        <College/>
                        <OCTOFrontEndDeveloper/>
                        <OCTOProductManager/>
                        <OCTOProgramManager/>
                        <PhenomPeople/>
                        <C1CardRulesLab/>
                        <C1BankWatchtower/>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
