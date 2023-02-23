import React from 'react';

const OtherTimelineSkill = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-[6px] mt-4">
            <li className="mb-8 ml-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 dark:border-gray-900 dark:bg-[#0D86FF]"
                    style={{ boxShadow: '0 0 0 0.1875rem rgb(13 134 255 / 25%)' }}
                ></div>
                <div className="animate-top">
                    <h3 className="relative -top-[5px] text-base font-semibold text-gray-900 dark:text-white">
                        NodeJs & Express
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        06/2022 - Now
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul style={{ listStyle: 'inside' }}>
                            <li className="mt-1">Backend Programming with NodeJs and Express.</li>
                            <li className="mt-1">Building RESTful APIs with NodeJs and Express.</li>
                            <li className="mt-1">
                                Use popular NodeJs libraries and frameworks like Mongoose, Socket.IO, Sequelize, etc.
                            </li>
                            <li className="mt-1">
                                Knowledge of NoSQL (MongoDB) and SQL (PostgreSQL, MySQL) databases.
                            </li>
                        </ul>
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
                        React Native
                    </h3>
                    <time className="my-1 mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        06/2022 - Now
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <ul style={{ listStyle: 'inside' }}>
                            <li className="mt-1">Self-study and develop mobile applications.</li>
                            <li className="mt-1">Take part in a few projects.</li>
                        </ul>
                    </p>
                </div>
            </li>
        </ol>
    );
};

export default OtherTimelineSkill;
