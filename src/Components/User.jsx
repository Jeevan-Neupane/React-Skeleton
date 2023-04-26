import { useEffect, useState } from "react";
import SkeletonUser from "../Skeleton/SkeletonUser";

function User() {
  const [profile, setProfile] = useState(null);
  

  useEffect(()=>{
    setTimeout(async ()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data=await res.json();//&Converts to JS Object
        setProfile(data);
     

    },10000)
  })


  const skeleton=Array(5).fill(0).map((_,index)=>{
    return (
      <SkeletonUser key={index} theme='dark'/>
    )
  })
  return (
    <div className="user">
      <h2>User Profile</h2>

       {!profile && skeleton}
      {profile && (
        
        <div className="profile">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>

        </div>
      )}

    </div>
  );
}

export default User;
