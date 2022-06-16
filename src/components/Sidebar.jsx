import React from 'react';
import Typical from 'react-typical';
import useScrollPosition from '../hook/useScrollPosition';
import { Transition } from '@headlessui/react';
import avata from '../assets/img/avta.png';
import cv from '../assets/img/cv.png';

const Sidebar = () => {
    const [isView, setIsView] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth < 1280) return;
        const updatePosition = () => {
            if (window.pageYOffset > 100) {
                setIsView(true);
            } else {
                setIsView(false);
            }
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
        <div
            className={`transition-[height] duration-200 ease-linear shadow-2xl rounded-2xl mb-10 xl:mb-0 w-[320px] h-[500px] dark:bg-[#302C40] mx-auto ${
                isView ? 'h-[600px] fixed top-10' : ''
            }`}
        >
            <div
                className={`transition-[top] duration-200 ease-linear -top-[18%] ${
                    isView ? 'top-[6%]' : ''
                } relative px-[34px]`}
            >
                <div className="w-[180px] rounded-2xl shadow-xl h-[180px] bg-[#24202F] mx-auto">
                    <img className="rounded-full scale-90" src={avata} alt="avata" />
                </div>
                <h2
                    className="text-[1.7rem] text-center pt-4 font-bold"
                    style={{ fontFamily: '"Merriweather", serif' }}
                >
                    NGUYỄN NHƯ Ý
                </h2>
                <div className="my-3">
                    <div className="w-[80%] py-1 mx-auto shadow-lg rounded-[999px] dark:bg-[#272333] text-center">
                        <Typical
                            steps={['Web deverloper', 2000, 'Mobile deverloper', 2000]}
                            wrapper="div"
                            loop={Infinity}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center my-6">
                    <a target="_blank" href="https://www.facebook.com/hamita12345">
                        <i className="fa-brands fa-facebook cursor-pointer hover:opacity-90 text-[20px]"></i>
                    </a>
                    <a className="mx-3" target="_blank" href="https://www.youtube.com/channel/UCZcj8qMrUswqps9HLfZb1uQ">
                        <i className="fa-brands fa-youtube cursor-pointer hover:opacity-90 text-[20px]"></i>
                    </a>
                    <a target="_blank" href="https://github.com/khanhandli">
                        <i className="fa-brands fa-github cursor-pointer hover:opacity-90 text-[20px]"></i>
                    </a>
                    <a
                        target="_blank"
                        className="ml-3 mb-1"
                        href="https://www.topcv.vn/xem-cv/VVFTAA0AAQYEWQZVAVkPUAUGVwUBDVpTBQQCWQa65c"
                    >
                        <img src={cv} alt="cv" className="cursor-pointer hover:opacity-90 w-[20px]" />
                    </a>
                </div>
                <div className="flex items-center mt-4">
                    <div className="w-[16px] flex justify-center">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <span className="ml-4">April, 17, 2000</span>
                </div>
                <div className="flex items-center mt-4">
                    <div className="w-[16px] flex justify-center">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>

                    <span className="ml-4">Ha Noi, Viet Nam</span>
                </div>
                <div className="flex items-center mt-4">
                    <div className="w-[16px] flex justify-center">
                        <i className="fa-solid fa-envelope"></i>
                    </div>

                    <span className="ml-4">khanhandli@gmail.com</span>
                </div>
                <div className="flex items-center mt-4">
                    <div className="w-[16px] flex justify-center">
                        <i className="fa-solid fa-mobile"></i>
                    </div>

                    <span className="ml-4">0328849286</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Sidebar);
