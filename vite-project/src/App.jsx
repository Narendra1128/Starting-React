import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      name: "Ramesh",
      position: "Artist",
      image:
        "https://images.unsplash.com/photo-1710302122056-a4fd87c037d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      friends: false,
    },
    {
      name: "Sumesh",
      position: "Vlogger",
      friends: false,
      image:
        "https://images.unsplash.com/photo-1710302122056-a4fd87c037d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Pramesh",
      position: "YouTuber",
      friends: false,
      image:
        "https://images.unsplash.com/photo-1710302122056-a4fd87c037d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Kamlesh",
      position: "Instagrammer",friends: false,
      image:
        "https://plus.unsplash.com/premium_photo-1710378174519-45b81c0eebfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
  ];
  const [val, setVal] = useState(data);
  
  const handleFriendsBtn = (clickedIndex)=>{
    setVal(val.map((item,index)=>{
      if(index==clickedIndex){
        return {...item, friends: !item.friends}
      }
      return item;
    }))};
  
  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex justify-center items-center gap-2">
        {val.map((item, index) => (
          <Card
            values={item}
            index={index}
            handleClick={handleFriendsBtn}
          />
        ))}
      </div>
    </>
  );
}

export default App;
