import React from "react";

function Card({user, removeBtn, index}) {
  return ( 
    <div className="w-52 bg-sky-300 rounded-md flex flex-col  gap-2 items-center justify-center p-8">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        <img className="h-full w-full" src={user.url} alt="" />
      </div>
      <p className="textlg m-0 p-0 font-semibold">{user.name}</p>
      <p className="text-xs m-0 p-0 opacity-40">{user.email}</p>
      <p className="leading-1 text-center text-xs font-semibold tracking-tight">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ame
      </p>
      <button onClick={()=>removeBtn(index)} className="mt-2 px-2 py-1 bg-red-600 text-white rounded-md font-semibold">Remove It</button>
    </div>
  );
}

export default Card;
