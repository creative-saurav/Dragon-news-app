import React from "react";
import { CiBookmark, CiStar } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="bg-white shadow-md rounded-lg  mb-6">
      {/* Author */}
      <div className="flex items-center justify-between p-4 mb-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h4 className="font-semibold text-primary">{author?.name}</h4>
            <p className="text-xs text-accent">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="text-accent cursor-pointer text-xl flex gap-3">
          <CiBookmark></CiBookmark>
          <GoShareAndroid></GoShareAndroid>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-70 object-cover rounded-md mb-6"
        />
        <p className="text-sm text-accent mb-3 mt-6">
         {
          details.length > 250 ? (
             <>
             {details.slice(0, 250)}...
              <span className="text-[#FF8C47] cursor-pointer"> Read More</span>
             </>
          ) :{
            details
          }
         }
        </p>
        <div className="flex items-center justify-between border-t border-base-300 pt-3">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[#FF8C47]">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < rating?.number ? <FaStar></FaStar> : <CiStar></CiStar>}
              </span>
            ))}

            <span className="text-accent ml-2">{rating?.number}</span>
          </div>

          {/* Views */}
          <div className="text-accent flex gap-3 items-center text-[16px]">
            <FaEye></FaEye> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
