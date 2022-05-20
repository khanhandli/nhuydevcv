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
import { Flipper, Flipped, spring } from 'react-flip-toolkit';

const data = [
    {
        id: 1,
        title: 'Shopping MERN Stack Version 1',
        category: 'Personal project',
        img: ecommercev1,
    },

    {
        id: 5,
        title: 'Shopping MERN Stack Version 2',
        category: 'Personal project',
        img: ecommercev2,
    },
    {
        id: 2,
        title: 'Vina Case',
        category: 'Company project',
        img: vinacase,
    },

    {
        id: 6,
        title: 'Mobile Vina Case',
        category: 'Company project',
        img: vinamb,
    },
    {
        id: 7,
        title: 'Blog App TypeScript',
        category: 'Personal project',
        img: blog,
    },
    {
        id: 8,
        title: 'Desktop App Meddom',
        category: 'Company project',
        img: meddom,
    },
    {
        id: 9,
        title: 'Admin Dashboard',
        category: 'Personal project',
        img: admin,
    },
    {
        id: 10,
        title: 'Chat App Lava',
        category: 'Company project',
        img: lava,
    },
    {
        id: 11,
        title: 'Vina Case Tax',
        category: 'Company project',
        img: tax,
    },
    {
        id: 12,
        title: 'App Family Tree',
        category: 'Company project',
        img: family,
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
                                    <img
                                        className="w-[300px] h-[176px] rounded-2xl object-cover cursor-pointer transition-[transform] hover:scale-105"
                                        src={props.img}
                                        alt="props.img"
                                    />
                                </div>
                                <div className="mx-1">
                                    <h3 className="text-lg mt-3">{props.title}</h3>
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
                                        .map(({ category, img, title, id }) => (
                                            <Card
                                                id={id}
                                                title={title}
                                                img={img}
                                                category={category}
                                                stagger={['forward', 'reverse'].includes('forward')}
                                                type="grid"
                                                key={id}
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
