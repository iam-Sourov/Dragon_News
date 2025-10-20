import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/MainLayouts/RightSide/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState({});
 
    
    useEffect(() => {
        const newsDetails = data.find(signleNews => signleNews.id == id);
        setNews(newsDetails);
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='container mx-auto grid grid-cols-12 gap-3'>
                <section className='col-span-9 mt-8'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;