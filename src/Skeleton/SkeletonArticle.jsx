import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";


function SkeletonArticle({theme}) {
    const themeClass=theme || 'light';
    //*This allows user to pass dark else light is default




  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-article">
            <SkeletonElement type='title'/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
           

        </div>
        <Shimmer/>
      
    </div>
  )
}

export default SkeletonArticle;
