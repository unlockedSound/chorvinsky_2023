import React from "react";


const Header = () => {
    return (
        <header>
            <div className="relative bg-white dark:bg-gray-900">
                <div
                    className="max-w-7xl mx-auto px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                    <div className="flex sm:flex-row flex-col justify-between">
                        <div className="flex justify-start w-full">
                            <img className="h-10 w-auto sm:h-16"
                                 src="logo_purple.svg"
                                 alt=""/>
                            <div
                                className="pl-3 sm:pl-6 py-1 text-3xl sm:text-4xl align-middle font-extrabold my-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 dark:from-purple-400 dark:to-indigo-300">
                                David Chorvinsky
                            </div>
                        </div>
                        <div className="flex md:order-2 justify-end pt-4 sm:pt-0 my-auto">
                            {/*<a rel="noopener noreferrer" href="https://www.instagram.com/echoofhaiku/"*/}
                            {/*   target="_blank"*/}
                            {/*   className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                            {/*    <span className="sr-only">Instagram</span>*/}
                            {/*    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24"*/}
                            {/*         aria-hidden="true">*/}
                            {/*        <path fill-rule="evenodd"*/}
                            {/*              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"*/}
                            {/*              clip-rule="evenodd"/>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}

                            {/*<a rel="noopener noreferrer" href="https://github.com/unlockedSound" target="_blank"*/}
                            {/*   className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                            {/*    <span className="sr-only">GitHub</span>*/}
                            {/*    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24"*/}
                            {/*         aria-hidden="true">*/}
                            {/*        <path fill-rule="evenodd"*/}
                            {/*              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
                            {/*              clip-rule="evenodd"/>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}

                            {/*<a rel="noopener noreferrer" href="tel:3018073848"*/}
                            {/*   className="text-gray-400 hover:text-gray-600">*/}
                            {/*    <span className="sr-only">Cell Phone</span>*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8"*/}
                            {/*         fill="none"*/}
                            {/*         viewBox="0 0 24 24" stroke="currentColor">*/}
                            {/*        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}
                            {/*<a rel="noopener noreferrer"*/}
                            {/*   href="https://s3.us-west-2.amazonaws.com/chorvinsky.com/david_chorvinsky_resume.pdf"*/}
                            {/*   target="_blank" className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                            {/*    <span className="sr-only">Resume</span>*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8"*/}
                            {/*         fill="none"*/}
                            {/*         viewBox="0 0 24 24" stroke="currentColor">*/}
                            {/*        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}


                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
