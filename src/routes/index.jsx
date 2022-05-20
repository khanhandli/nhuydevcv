import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

const RouterList = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default RouterList;
