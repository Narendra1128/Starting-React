import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card"
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1606614520047-8ad516d9d84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3N8ZW58MHx8MHx8fDA%3D",
      name: "Challenger",
      artist: "Krsna",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1540829016269-e05670f88adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmdzfGVufDB8fDB8fHww",
      name: "Bad Boy",
      artist: "Karma",
      added: false,
    },
    { image: "", name: "Makasam", artist: "Emiway", added: true },
    { image: "", name: "Untitled", artist: "Raftaar", added: false },
    { image: "", name: "Maharaani", artist: "Seedhe Maut", added: true },
  ];

  const [RealData, setRealData] = useState(data);
  
  const addedBtn = (clickedIndex) => {
    return setRealData((RealData)=> {return RealData.map(
      (item, index)=>{
        if(index===clickedIndex){return {...item, added: !item.added}};
        return item;
      }
    )})
  };

  const favCount = data.filter((item) => item.added).length;
  
  const [Realfavourites, setFavourites] = useState(favCount);
  
  const favBtn = (added)=>{
    return added  ? setFavourites((prev) => prev - 1)
      : setFavourites((prev) => prev + 1);
  }

  return (
    <>
      <div className="h-screen w-full bg-zinc-200">
        <Navbar favourites={Realfavourites} favBtn={favBtn}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {RealData.map((item, index)=>{
            return <Card values={item} key={index} index={index} handleClick={addedBtn} favBtn={favBtn}/>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
