import React from "react";
import blogData from "../data/blog";
import Header from "./components/header";
import About from "./components/about";
import Article from "./components/article";
import ArticleList from "./components/articlelist";

console.log(blogData);

function App() {
  return (
    <div>
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;
