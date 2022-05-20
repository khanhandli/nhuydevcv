import React from 'react';
import Slider from 'react-slick';
import antd from '../assets/img/antd.svg';
import electron from '../assets/img/electron.svg';
import MbApp from '../assets/img/mobile-app.svg';
import MUI from '../assets/img/mui.svg';
import native from '../assets/img/native.svg';
import nodejs from '../assets/img/nodejs.svg';
import redux from '../assets/img/redux.svg';
import Twcss from '../assets/img/tw.svg';
import typescript from '../assets/img/typescript.svg';
import webDesign from '../assets/img/web-design.svg';
import webApp from '../assets/img/web-dev.svg';
import LayoutComponent from '../components/LayoutComponent';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
};

const dataTechcology = [
    {
        icon: electron,
    },
    {
        icon: native,
    },
    {
        icon: antd,
    },
    {
        icon: MUI,
    },
    {
        icon: Twcss,
    },
    {
        icon: nodejs,
    },
    {
        icon: redux,
    },
    {
        icon: typescript,
    },
];
const HomePage = () => {
    return (
        <LayoutComponent>
            <div className="mt-4 opacity-90 text-[15px] animate-opacity">
                Hello World! I'm Nguyen Nhu Y, a Front-End Web Developer and Mobile Developer. From choreography on a
                stage to lines of code on a web page, I love combining the worlds of logic and creative design to make
                eye-catching, accessible, and user-friendly websites and applications.
            </div>
            <div className="mt-4 opacity-90 text-[15px] animate-opacity1">
                Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry
                through representation is of importance to me. My job is to build your website so that it is functional
                and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and
                make sure that is eye-catching and easy to use.
            </div>

            <div>
                <h3 className="text-2xl font-bold py-6 animate-title">What I'm Doing</h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className="dark:bg-[#2C283A] rounded-2xl animate-card1">
                        <div className="flex p-[30px] align-top">
                            <div className="max-w-[100px] min-w-[70px] h-[46px]">
                                <img src={webApp} alt="webApp" />
                            </div>
                            <div>
                                <h3 className="text-xl">Web Developer</h3>
                                <span className="text-[15px] opacity-80 mt-1 block">
                                    High-quality and professional development of sites at the professional level.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-[#2C283A] rounded-2xl animate-card2">
                        <div className="flex p-[30px] align-top">
                            <div className="max-w-[100px] min-w-[70px] h-[46px]">
                                <img src={MbApp} alt="MbApp" />
                            </div>
                            <div>
                                <h3 className="text-xl">Mobile Developer</h3>
                                <span className="text-[15px] opacity-80 mt-1 block">
                                    Professional development of applications for iOS and Android.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-[#2C283A] rounded-2xl animate-card3">
                        <div className="flex p-[30px] align-top">
                            <div className="max-w-[100px] min-w-[70px] h-[46px]">
                                <i class="fa-solid fa-desktop text-[#156ecd] text-[34px]"></i>
                            </div>
                            <div>
                                <h3 className="text-xl">Desktop Developer</h3>
                                <span className="text-[15px] opacity-80 mt-1 block">
                                    Create desktop applications using Electronjs.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-[#2C283A] rounded-2xl animate-card4">
                        <div className="flex p-[30px] align-top">
                            <div className="max-w-[100px] min-w-[70px] h-[46px]">
                                <img src={webDesign} alt="webDesign" />
                            </div>
                            <div>
                                <h3 className="text-xl">Web Design</h3>
                                <span className="text-[15px] opacity-80 mt-1 block">
                                    The most modern and high-quality design made at a professional level.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-tech">
                <h3 className="text-2xl font-bold py-6">Technology</h3>
                <div className="min-w-full mb-[15px]">
                    <Slider {...settings}>
                        <div>
                            <div className="flex justify-center cursor-grab">
                                <i className="fa-brands fa-js text-[6rem] block text-[#efd81d]"></i>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center cursor-grab">
                                <i className="fa-brands fa-react text-[6rem] block text-[#0dc7ff]"></i>
                            </div>
                        </div>
                        {dataTechcology.map((item) => (
                            <div key={item.icon}>
                                <div className="flex justify-center cursor-grab">
                                    <img className="h-[96px] w-[84px] block" src={item.icon} alt="tw" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </LayoutComponent>
    );
};

export default HomePage;
