import React, { Component } from "react";
import Article from "./Article";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      value: 0,
    };
  }

  componentDidMount() {
    const URL = `https://newsapi.org/v2/everything?sources=hacker-news&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;
    // TODO: start coding!
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((responseBody) =>
        this.setState({ articles: responseBody.articles })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.articles.map((article, i) => (
      // TODO: start coding!
      <Article article={article}></Article>
    ));
  }
}

export default NewsFeed;
