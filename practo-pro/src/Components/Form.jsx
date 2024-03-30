import { data } from 'autoprefixer';
import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormSubmitData}) {
  const { register, handleSubmit } = useForm();
  
  return (
    <div className="flex justify-center mt-10">
      <form
        className="flex gap-10"
        onSubmit={handleSubmit((data) => handleFormSubmitData(data))}
      >
        <input
          {...register("name")}
          className="outline-none font-semibold"
          type="text"
          placeholder="Name"
        />
        <input type="text" {...register("email")} placeholder="Email" />
        <input type="text" {...register("url")} placeholder="Image Url" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form