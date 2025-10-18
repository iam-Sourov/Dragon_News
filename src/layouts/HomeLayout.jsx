import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/MainLayouts/LeftSide/LeftAside';
import RightAside from '../components/MainLayouts/RightSide/RightAside';

const HomeLayout = () => {
    return (
        <>
            <header className='container mx-auto'>
                <Header></Header>
                <section >
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='container mx-auto grid grid-cols-12 gap-4'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </>
    );
};

export default HomeLayout;