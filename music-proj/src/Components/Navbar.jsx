import React from 'react'

function Navbar({favourites, favBtn}) {
  return (
    <div className="w-full px-20 py-3  flex justify-between items-center gap-2">
      <h3 className='font-semibold'>Orange</h3>
      <div className="px-4 py-2 bg-orange-600 text-white flex justify-between items-center gap-3 rounded-full">
        <h3>Favourites</h3>
        <h4 className='text-xs border-none bg-[#dadada8b] p-2 px-3 rounded-full text-white font-bold'>{favourites}</h4>
      </div>
    </div>
  );
}

export default Navbar