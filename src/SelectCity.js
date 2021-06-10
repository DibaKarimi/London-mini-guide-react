import React from "react";


const SelectCity=()=>{
return (
  <div className="row  my-5 border-top border-bottom p-4">
    <label className="col-2 pt-1">choose a city</label>
    <select
      className="form-select w-25 col-3"
      aria-label="Default select example"
    >
      <option selected>Choose a city</option>
      <option value="stratford">stratford</option>
      <option value="harrow">harrow</option>
      <option value="heathrow">heathrow</option>
    </select>
  </div>
);

}

export default SelectCity;