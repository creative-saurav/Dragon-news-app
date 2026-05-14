import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Header from '../Components/Navbar/Header';
import LatestNews from '../Components/Navbar/LatestNews';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto py-3 grid grid-cols-12 gap-3'>
               <aside className='col-span-3'>
                 <LeftAside></LeftAside>
               </aside>
                <div className="main col-span-6">
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <div></div>
        </div>
    );
};

export default HomeLayout;