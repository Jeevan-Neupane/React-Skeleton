import { useEffect, useState } from "react";

function User() {
  const [profile, setProfile] = useState(null);
  

  useEffect(()=>{
    setTimeout(async ()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data=await res.json();//&Converts to JS Object
        setProfile(data);
     

    },5000)
  })
  return (
    <div className="user">
      <h2>User Profile</h2>

       {!profile && <p>Please Wait Its Loading ...</p>}
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
