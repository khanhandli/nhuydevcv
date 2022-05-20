import React from 'react';

const TimelineEducation = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-[6px]">
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        Hanoi University of Natural Resources and Environment
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2018 - 2022
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Learn the basics of programming, databases, algorithms, ... Access to exchange and learn from
                        friends and teachers.
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
                        Self-study at FULLSTACK.EDU.VN
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        6/2020 - Now
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        The first step towards programming languages, future orientation. Self-study is enhanced. A
                        great step forward in the field of programming.
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

export default TimelineEducation;
