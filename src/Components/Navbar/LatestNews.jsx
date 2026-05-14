import React from "react";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <div className="overflow-hidden bg-base-200 py-4 mt-8 flex items-center gap-5">
      <span className="btn btn-secondary py-2.5 px-6 rounded-none">Latest</span>

      <div className="marquee">
        <div className="marquee-content">
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened !
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened !
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened !
          </p>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened !
          </p>
        </div>

      </div>
    </div>
  );
};

export default LatestNews;
