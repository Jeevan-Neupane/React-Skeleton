import { useState,useEffect } from "react";
import SkeletonElement from "../Skeleton/SkeletonElement";
import SkeletonArticle from "../Skeleton/SkeletonArticle";





function Article() {
  const [articles, setArticle] = useState([]);
  const [loading,setLoading]=useState(true)


  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json(); //&Converts to JS Object
      setArticle(data);
      setLoading(false);
    }, 10000);
  });


  const renderedArticle=articles.map((article)=>{
    return (
        <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>

        </div>
    )
  })
  const Loading=Array(5).fill(0).map((_,index)=>{
    return (
      <SkeletonArticle key={index} theme='dark'/>
    )
  })

  return (
    <div className="articles">
        
      <h2>Articles</h2>

      
      {articles && renderedArticle}

     

      {loading && Loading}
    </div>
  );
}

export default Article;
