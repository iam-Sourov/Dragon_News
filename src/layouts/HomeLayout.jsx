import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <>
            <header>
                <Header></Header>
                <section className='container mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </>
    );
};

export default HomeLayout;