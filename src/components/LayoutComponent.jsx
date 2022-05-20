import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutComponent = ({ children }) => {
    const [isActive, setIsActive] = React.useState(false);
    const { pathname } = useLocation();

    return (
        <div className="flex flex-row">
            <div className="w-[320px]">
                <Sidebar />
            </div>
            <div className="flex-1 opacity shadow-2xl rounded-2xl dark:bg-[#302C40] ml-[40px] mr-[26px] p-[40px] relative">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-bold border_custom pb-5 relative">
                        {pathname === '/'
                            ? 'About Me'
                            : pathname === '/resume'
                            ? 'Resume'
                            : pathname === '/portfolio'
                            ? 'Portfolio'
                            : pathname === '/blog'
                            ? 'Blog'
                            : pathname === '/contact'
                            ? 'Contact'
                            : ''}
                    </h3>
                    <div>
                        <ul
                            className={`transition-[padding] ease-out duration-[450ms] overflow-hidden flex absolute top-0 right-0 shadow-2xl bg-[#0d86ff] rounded-tl-[999px] rounded-bl-[999px] rounded-br-[999px] rounded-tr-[20rem] p-[14px] px-[80px] pr-[120px] ${
                                isActive ? 'w-0 px-0 pr-20' : ''
                            }`}
                        >
                            <li
                                className={`${
                                    pathname === '/' ? 'opacity-100 font-bold' : 'opacity-80'
                                } cursor-pointer hover:opacity-100 transition-transform ease-[cubic-bezier(0.72, 0.16, 0.345, 0.875)] duration-200 mx-[24px] translate-x-[0px] ${
                                    isActive ? 'mx-0 opacity-0 translate-x-[270px]' : ''
                                }`}
                            >
                                <Link to="/">About</Link>
                            </li>
                            <li
                                className={`${
                                    pathname === '/resume' ? 'opacity-100 font-bold' : 'opacity-80'
                                } cursor-pointer hover:opacity-100 transition-transform ease-[cubic-bezier(0.72, 0.16, 0.345, 0.875)] duration-[250ms] mx-[24px] translate-x-[0px] ${
                                    isActive ? 'mx-0 opacity-0 translate-x-[270px]' : ''
                                }`}
                            >
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li
                                className={`${
                                    pathname === '/portfolio' ? 'opacity-100 font-bold' : 'opacity-80'
                                } cursor-pointer hover:opacity-100 transition-transform ease-[cubic-bezier(0.72, 0.16, 0.345, 0.875)] duration-300 mx-[24px] translate-x-[0px] ${
                                    isActive ? 'mx-0 opacity-0 translate-x-[270px]' : ''
                                }`}
                            >
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li
                                className={`${
                                    pathname === '/blog' ? 'opacity-100 font-bold' : 'opacity-80'
                                } cursor-pointer hover:opacity-100 transition-transform ease-[cubic-bezier(0.72, 0.16, 0.345, 0.875)] duration-[350ms] mx-[24px] translate-x-[0px] ${
                                    isActive ? 'mx-0 opacity-0 translate-x-[270px]' : ''
                                }`}
                            >
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li
                                className={`${
                                    pathname === 'contact' ? 'opacity-100 font-bold' : 'opacity-80'
                                } cursor-pointer hover:opacity-100 transition-transform ease-[cubic-bezier(0.72, 0.16, 0.345, 0.875)] duration-[400ms] mx-[24px] translate-x-[0px] ${
                                    isActive ? 'mx-0 opacity-0 translate-x-[270px]' : ''
                                }`}
                            >
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="circle-menu cursor-pointer" onClick={() => setIsActive(!isActive)}>
                            <div className={`hamburger ${!isActive ? 'is-active' : ''}`}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition-all">{children}</div>
            </div>
        </div>
    );
};

export default LayoutComponent;
