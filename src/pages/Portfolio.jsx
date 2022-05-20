import React from 'react';
import LayoutComponent from '../components/LayoutComponent';
import ecommercev1 from '../assets/img/ecommercev1.png';
import ecommercev2 from '../assets/img/ecommercev2.png';
import vinacase from '../assets/img/vinacase.png';
import blog from '../assets/img/blog.png';
import vinamb from '../assets/img/vinamb.png';
import meddom from '../assets/img/meddom.png';
import admin from '../assets/img/admin.png';
import lava from '../assets/img/lava.png';
import tax from '../assets/img/tax.png';
import family from '../assets/img/family.png';
import doc from '../assets/img/doc.png';
import cococlient from '../assets/img/cococlient.png';
import cocoserver from '../assets/img/cocoserver.png';
import docmobile from '../assets/img/docmb.png';
import { Flipper, Flipped, spring } from 'react-flip-toolkit';
import { Image } from 'antd';

const data = [
    {
        id: 1,
        title: 'Shopping MERN Stack Version 1',
        link: 'https://shopcnpm.herokuapp.com',
        category: 'Personal project',
        img: ecommercev1,
    },

    {
        id: 5,
        title: 'Shopping MERN Stack Version 2',
        category: 'Personal project',
        link: '#',
        img: ecommercev2,
    },
    {
        id: 2,
        title: 'Vina Case',
        category: 'Company project',
        link: 'https://demo.vinacase.vn',
        img: vinacase,
    },

    {
        id: 6,
        title: 'Mobile Vina Case',
        category: 'Company project',
        link: '#',
        img: vinamb,
    },
    {
        id: 7,
        title: 'Blog App TypeScript',
        category: 'Personal project',
        link: 'https://nhuydev.tk',
        img: blog,
    },
    {
        id: 8,
        title: 'Desktop App Meddom',
        category: 'Company project',
        link: '#',
        img: meddom,
    },
    {
        id: 9,
        title: 'Admin Dashboard',
        category: 'Personal project',
        link: 'https://nhuydev.cf',
        img: admin,
    },
    {
        id: 10,
        title: 'Chat App Lava',
        category: 'Company project',
        link: 'https://app.lava.net.vn',
        img: lava,
    },
    {
        id: 11,
        title: 'Vina Case Tax',
        category: 'Company project',
        link: 'https://tax.vinaseco.vn',
        img: tax,
    },
    {
        id: 12,
        title: 'App Family Tree',
        category: 'Company project',
        link: '#',
        img: family,
    },
    {
        id: 13,
        title: 'Vina Case Doc',
        category: 'Company project',
        link: 'https://doc.vinaseco.vn',
        img: doc,
    },
    {
        id: 14,
        title: 'CoCoShop Client',
        category: 'Personal project',
        link: 'https://cocoshopclient.tk',
        img: cococlient,
    },
    {
        id: 15,
        title: 'CoCoShop Server',
        category: 'Personal project',
        link: 'https://cocoshopserver.tk',
        img: cocoserver,
    },
    {
        id: 16,
        title: 'Doc Mobile',
        category: 'Company project',
        link: '#',
        img: docmobile,
    },
];
const onElementAppear = (el, index) =>
    spring({
        onUpdate: (val) => {
            el.style.opacity = val;
            el.style.transform = `scale(${val})`;
        },
        delay: index * 30,
    });

const onExit = (type) => (el, index, removeElement) => {
    spring({
        config: { overshootClamping: true },
        onUpdate: (val) => {
            el.style.transform = `scale(${1 - val})`;
            el.style.opacity = 1 - val;
        },
        delay: index * 50,
        onComplete: removeElement,
    });

    return () => {
        el.style.opacity = '';
        removeElement();
    };
};

const onGridExit = onExit('grid');
const Card = (props) => {
    const flipId = `item-${props.id}`;

    const shouldFlip = (prev, current) => {
        if (prev.type !== current.type) {
            return true;
        }
        return false;
    };

    return (
        <Flipped
            flipId={flipId}
            key={flipId}
            onAppear={onElementAppear}
            onExit={onGridExit}
            stagger={props.stagger}
            shouldInvert={shouldFlip}
        >
            <li className="flex justify-center mb-4">
                <Flipped inverseFlipId={flipId}>
                    <div className="max-w-[300px]">
                        <Flipped flipId={`${flipId}-content`} translate shouldFlip={shouldFlip} delayUntil={flipId}>
                            <div>
                                <div className="flex justify-center w-[300px] h-[176px] overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        className="w-[300px] h-[176px] rounded-2xl object-cover cursor-pointer transition-[transform] hover:scale-105"
                                        src={props.img}
                                        alt="props.img"
                                    />
                                </div>
                                <div className="mx-1">
                                    <h3 className="text-lg mt-3">
                                        <a target="_blank" href={props.link}>
                                            {props.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm opacity-70">{props.category}</p>
                                </div>
                            </div>
                        </Flipped>
                    </div>
                </Flipped>
            </li>
        </Flipped>
    );
};

const Portfolio = () => {
    const [sort, setSort] = React.useState('all');
    const [filteredIds, setfilteredIds] = React.useState([]);

    return (
        <LayoutComponent>
            <div className="mt-4 min-h-full">
                <Flipper
                    flipKey={`grid-${sort}-${JSON.stringify(filteredIds)}-${JSON.stringify('forward')}`}
                    spring="noWobble"
                    staggerConfig={{
                        default: {
                            speed: 2,
                        },
                    }}
                    decisionData={{ sort, filteredIds }}
                >
                    <div className="flex mb-4 font-bold">
                        <div
                            className={`${
                                sort === 'all' ? '' : 'opacity-80 font-normal hover:opacity-100'
                            } cursor-pointer`}
                            onClick={() => {
                                setSort('all');
                                setfilteredIds(data);
                            }}
                        >
                            All
                        </div>
                        <div
                            className={`mx-[20px] ${
                                sort === 'personal' ? '' : 'opacity-80 font-normal hover:opacity-100'
                            } cursor-pointer`}
                            onClick={() => {
                                setSort('personal');
                                const a = [];
                                const clone = [...data];
                                clone.forEach((item) => {
                                    if (item.category === 'Personal project') {
                                        a.push(item.id);
                                    }
                                });

                                setfilteredIds(a);
                            }}
                        >
                            Company project
                        </div>
                        <div
                            className={`${
                                sort === 'company' ? '' : 'opacity-80 font-normal hover:opacity-100'
                            } cursor-pointer`}
                            onClick={() => {
                                setSort('company');

                                const a = [];
                                const clone = [...data];

                                clone.forEach((item) => {
                                    if (item.category === 'Company project') {
                                        a.push(item.id);
                                    }
                                });
                                setfilteredIds(a);
                            }}
                        >
                            Persional project
                        </div>
                    </div>

                    <Flipped flipId="list">
                        <div>
                            <Flipped inverseFlipId="list">
                                <ul className="grid grid-cols-2 2xl:grid-cols-3 gap-4">
                                    {[...data]
                                        .filter((d) => !filteredIds.includes(d.id))
                                        .map(({ category, img, link, title, id }) => (
                                            <Card
                                                id={id}
                                                title={title}
                                                img={img}
                                                category={category}
                                                stagger={['forward', 'reverse'].includes('forward')}
                                                type="grid"
                                                key={id}
                                                link={link}
                                            />
                                        ))}
                                </ul>
                            </Flipped>
                        </div>
                    </Flipped>
                </Flipper>
            </div>
        </LayoutComponent>
    );
};

export default Portfolio;
