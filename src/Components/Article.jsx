import { useState,useEffect } from "react";
import SkeletonElement from "../Skeleton/SkeletonElement";





function Article() {
  const [articles, setArticle] = useState([]);


  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json(); //&Converts to JS Object
      setArticle(data);
    }, 5000);
  });


  const renderedArticle=articles.map((article)=>{
    return (
        <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>

        </div>
    )
  })

  return (
    <div className="articles">
        
      <h2>Articles</h2>

      <SkeletonElement type={'title'}/>
      <SkeletonElement type={'text'}/>
      <SkeletonElement type={'avatar'}/>
      <SkeletonElement type={'thumbnail'}/>
      {articles && renderedArticle}

     

      {articles && <p>Please Wait Its Loading ...</p>}
    </div>
  );
}

export default Article;
