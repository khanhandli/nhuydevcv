import React from 'react';
import LayoutComponent from '../components/LayoutComponent';

const Contact = () => {
    return (
        <LayoutComponent>
            <div className="mt-4 h-full">
                <section>
                    <div className="px-4 mx-auto max-w-screen-md">
                        <p className="my-10 font-light text-center text-gray-500 dark:text-[#e5e5e5] text-lg">
                            Got a technical issue? Want to send feedback about a beta feature? Need details about our
                            Business plan? Let us know.
                        </p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    for="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </LayoutComponent>
    );
};

export default Contact;
