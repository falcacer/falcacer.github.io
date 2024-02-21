import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/projects.js";
import Title from "./Title.jsx";

export default function Portofolio() {
  return (
    <div>
      <Title id="portfolio">Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item) => (
            <PortfolioItem
              title={item.title}
              imgUrl={item.imgUrl}
              stack={item.stack}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
