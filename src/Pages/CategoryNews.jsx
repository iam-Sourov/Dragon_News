import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    console.log(categoryNews);


    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data)
            return;
        } else if (id == '1') {
            const filterdNews = data.filter(news => news?.others?.is_today_pick == true);
            setCategoryNews(filterdNews);
        } else {
            const filterdData = data.filter(news => news.category_id === parseInt(id));
            setCategoryNews(filterdData);
        }
    }, [data, id]);
    return (
        <div>
            <div className='grid grid-cols-1 gap-2'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>

    );
};

export default CategoryNews;