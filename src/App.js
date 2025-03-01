import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header";
import ProjectsSection from "./components/Sections/ProjectsSection";
import HobbiesSection from "./components/Sections/HobbiesSection";
import IntroSection from "./components/Sections/IntroSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <Header/>
            <main>
                <div className="relative">
                    <IntroSection/>
                    <ProjectsSection/>
                    <HobbiesSection/>
                    <ContactSection/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
