import React from "react";
import ProjectBuyersGuide from "../projectsElements/ProjectBuyersGuide";
import ProjectCovid19Checker from "../projectsElements/ProjectCovid19Checker";
import ProjectSpeakEzRegistration from "../projectsElements/ProjectSpkEzRegistration";
import ProjectDCSexOffenderSearch from "../projectsElements/ProjectDCSexOffenderSearch";
import ProjectCrimeCards from "../projectsElements/ProjectCrimeCards";

const ProjectsSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
            <div
                className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    A few projects on and off the job
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-purple-200">
                    No matter where I am I'm looking for problems to solve and projects to work on. Both at
                    work and home I'm driven by a desire to create which has led to some of the following
                    projects.
                </p>
                <div
                    className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                    <ProjectBuyersGuide/>
                    <ProjectCovid19Checker/>
                    <ProjectSpeakEzRegistration/>
                    <ProjectCrimeCards/>
                </div>
            </div>
        </div>

    );
};

export default ProjectsSection;
