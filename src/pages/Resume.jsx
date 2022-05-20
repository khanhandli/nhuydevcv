import React from 'react';
import LayoutComponent from '../components/LayoutComponent';
import TimelineEducation from '../components/Resume/TimelineEducation';
import education from '../assets/img/education.svg';
import experience from '../assets/img/experience.svg';
import TimelineExperience from '../components/Resume/TimelineExperience';
import ProgressBar from '../components/ProgressBar';

const Resume = () => {
    const [isRunProcess, setIsRunProcess] = React.useState(false);

    React.useEffect(() => {
        const updatePosition = () => {
            if (window.pageYOffset > 100) {
                setIsRunProcess(true);
            } else {
                setIsRunProcess(false);
            }
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const FEData = [
        { bgcolor: '#0D86FF', completed: isRunProcess ? 85 : 0, language: isRunProcess ? 'HTML' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 90 : 0, language: isRunProcess ? 'CSS' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 80 : 0, language: isRunProcess ? 'Javascript' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 80 : 0, language: isRunProcess ? 'ReactJS' : '' },
    ];

    const BEData = [
        { bgcolor: '#0D86FF', completed: isRunProcess ? 70 : 0, language: isRunProcess ? 'NodeJS' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 65 : 0, language: isRunProcess ? 'Express' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 55 : 0, language: isRunProcess ? 'MongoDB' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 55 : 0, language: isRunProcess ? 'MySQL' : '' },
    ];

    const UIData = [
        { bgcolor: '#0D86FF', completed: isRunProcess ? 90 : 0, language: isRunProcess ? 'Ant Design' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 80 : 0, language: isRunProcess ? 'Material UI' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 75 : 0, language: isRunProcess ? 'Tailwind CSS' : '' },
    ];

    const MBDTData = [
        { bgcolor: '#0D86FF', completed: isRunProcess ? 70 : 0, language: isRunProcess ? 'React Native' : '' },
        { bgcolor: '#0D86FF', completed: isRunProcess ? 65 : 0, language: isRunProcess ? 'Electron JS' : '' },
    ];

    return (
        <LayoutComponent>
            <div className="mt-4">
                <div className="flex">
                    <div className="flex-1 mr-[20px]">
                        <h2 className="flex items-center text-2xl font-bold mb-[34px] mt-[16px]">
                            <img className="h-[40px] w-[40px] mr-4" src={education} alt="education" />
                            <span>Education</span>
                        </h2>
                        <TimelineEducation />
                    </div>
                    <div className="flex-1 ml-[20px]">
                        <h2 className="flex items-center text-2xl font-bold mb-[34px] mt-[16px]">
                            <img className="h-[40px] w-[40px] mr-4" src={experience} alt="experience" />
                            <span>Experience</span>
                        </h2>
                        <TimelineExperience />
                    </div>
                </div>
                <div className="flex-1 mr-[20px]">
                    <h2 className="flex items-center text-2xl font-bold mb-[14px] mt-[16px]">
                        <span>Coding Skills</span>
                    </h2>
                    <div className="flex">
                        <div className="flex-1 mr-[10px]">
                            <h2 className="text-lg ml-4 font-bold mb-4">Web FrontEnd</h2>
                            <div className="bg-[#2C283A] px-[20px] py-[2px] rounded-2xl">
                                {FEData.map((item, idx) => (
                                    <ProgressBar
                                        key={idx}
                                        bgcolor={item.bgcolor}
                                        completed={item.completed}
                                        language={item.language}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 ml-[10px]">
                            <h2 className="text-lg ml-4 font-bold mb-4">Web Backend</h2>
                            <div className="bg-[#2C283A] px-[20px] py-[2px] rounded-2xl">
                                {BEData.map((item, idx) => (
                                    <ProgressBar
                                        key={idx}
                                        bgcolor={item.bgcolor}
                                        completed={item.completed}
                                        language={item.language}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="flex-1 mr-[10px]">
                            <h2 className="text-lg ml-4 font-bold mb-4">UI Frameworks</h2>
                            <div className="bg-[#2C283A] px-[20px] py-[2px] rounded-2xl">
                                {UIData.map((item, idx) => (
                                    <ProgressBar
                                        key={idx}
                                        bgcolor={item.bgcolor}
                                        completed={item.completed}
                                        language={item.language}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 ml-[10px]">
                            <h2 className="text-lg ml-4 font-bold mb-4">Moblie App & Desktop App</h2>
                            <div className="bg-[#2C283A] px-[20px] py-[2px] rounded-2xl">
                                {MBDTData.map((item, idx) => (
                                    <ProgressBar
                                        key={idx}
                                        bgcolor={item.bgcolor}
                                        completed={item.completed}
                                        language={item.language}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    );
};

export default Resume;
