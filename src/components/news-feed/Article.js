import React from "react";
import "./NewsFeed.css";
import Voting from "./Voting";
const Article = ({ article, i }) => {
  return (
    <div className="container">
      <div key={i}>
        <div className="voting">
          <Voting />
        </div>
        <p className="content"> {article.content}</p>
        <p className="para">
          - {article.author ? article.author : "Anonymous"}
        </p>
        <p>
          Published:{" "}
          {new Date(Date.parse(article.publishedAt)).toLocaleString()}
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default Article;
