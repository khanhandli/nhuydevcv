import React from 'react';

const TimelineExperience = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-[6px]">
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        1 year experience using ReactJS
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        02/2021 - Now
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        This is throughout the learning process as well as personal projects.
                    </p>
                </div>
            </li>
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top1">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        Practice FrontEnd ReactJS
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        06/2021 - 08/2021
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        During practice. I myself have improved my skills, as well as knowledge. Get access to more new
                        technologies. The ability to work in groups and self-study is enhanced.
                    </p>
                </div>
            </li>
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top15">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        6 months fulltime employee
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        08/2020 - Now
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I have been through many different projects. Get access to mobile as well as desktop application
                        development. In addition, my code optimization as well as my carefulness are enhanced.
                    </p>
                </div>
            </li>
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top2">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        REACTJS LEARNING AT EZFONTEND
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        04/2021 - 06/2021
                    </time>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        First approach to ReactJs, adding advanced ES6 knowledge. Access backend communication through
                        API.
                    </p>
                </div>
            </li>
        </ol>
    );
};

export default TimelineExperience;
