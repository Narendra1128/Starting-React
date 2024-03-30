import React from 'react'
import Card from "./Card.jsx"; 

function Cards({users, removeBtn}) {
  return (
    <div className="w-full max-h-72 overflow-auto bg-sky-100 p-2 flex justify-center items-center gap-4 mb-2 flex-wrap">
      {users.map((item, index)=>
        <Card key={index} user={item} index={index} removeBtn={removeBtn}/>
      )}
    </div>
  );
}

export default Cards