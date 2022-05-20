import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import RouterList from './routes/index.jsx';
function App() {
    const [enabled, setEnabled] = useState(true);

    React.useEffect(() => {
        if (enabled) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [enabled]);

    return (
        <div className="min-h-[100vh] bg-[#fff] dark:bg-[#272333] text-black dark:text-white">
            {/* <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-[#4d4d4d]' : 'bg-slate-500'}
           absolute inline-flex flex-shrink-0 h-[34px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch> */}
            <div className="container mx-auto py-40 px-[40px]">
                <RouterList />
            </div>
        </div>
    );
}

export default App;
