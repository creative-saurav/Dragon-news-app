import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Components/NewsCard/NewsCard';

const CategoryNews = ({category}) => {
    const {id} = useParams(category);
    const data = useLoaderData();
    const [CategoriesNews , setCategoriesNews] = useState([]);

    useEffect((()=>{
        if(id == '0'){
         setCategoriesNews(data);
        }else if(id == '1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoriesNews(filteredNews);
           
        }else{
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoriesNews(filteredNews);
        }
         
         
    }),[data, id])
    return (
        <div>
            <h2 className='font-bold text-primary mb-5'>Total  {CategoriesNews.length} News Found</h2>
            {
                CategoriesNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;