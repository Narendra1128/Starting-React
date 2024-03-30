import React, { useState } from 'react'
import Cards from "./Components/Cards.jsx";
import Card from "./Components/Card.jsx";
import Form from "./Components/Form.jsx"; 

function App() {
  const [users, SetUsers] = useState([])

  const handleRemove = (clickedIndex) => {
    SetUsers((users) =>
       users.filter((_, index) => index !== clickedIndex)
    );
  };

  const handleFormSubmitData = (data) => { return SetUsers([...users, data]) }
  
  return (
    <div className="w-full h-screen bg-zinc-100 p-4 flex items-center justify-center">
      <div className="mx-auto container">
        <Cards users={users} removeBtn = {handleRemove} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App