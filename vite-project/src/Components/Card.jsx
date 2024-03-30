import React from "react";

function Card({ values,index, handleClick }) {
  const { name, image, profession, friends } = values;

  return (
    <div className="w-52 bg-zinc-100 rounded overflow-hidden">
      <div className="w-full h-40 overflow-hidden bg-sky-700">
        <img className="w-full object-cover" src={image} alt="" />
      </div>

      <div className="w-full p-3">
        <h3 className="tex-xl font-semibold">{name}</h3>
        <h3 className="text-sm">{profession}</h3>
        <button
          onClick={() => {
            handleClick(index);
          }}
          className={`${
            friends ? "bg-green-400" : "bg-sky-400"
          } rounded p-2 mt-4 text-xs text-white font-semibold`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
