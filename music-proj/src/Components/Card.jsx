import React from "react";

function Card({values, index, handleClick, favBtn}) {
  const {image, name, artist, added} = values;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md pb-10 relative flex gap-4 mt-10">
      <div className="w-20 h-20 rounded-md bg-orange-600">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h3 className="font-semibold leading-none text-xl">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={()=>{handleClick(index); favBtn(added);}} className={`${added? "bg-green-400":"bg-orange-600"} px-4 py-2 absolute left-1/2 bottom-0 whitespace-nowrap translate-y-[50%] -translate-x-[50%] text-white text-xs rounded-full`}>
        {added? "Added" : "Add To Favourites"}
      </button>
    </div>
  );
}

export default Card;
