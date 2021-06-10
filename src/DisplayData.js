import React,{useState} from "react";

const DisplayData = () => {
const [CitiesData,setCitiesData]=useState([]);
 // const url = "https://sepia-like-orchestra.glitch.me/stratford/doctors";
//   useEffect(() => {
    fetch(`https://sepia-like-orchestra.glitch.me/stratford/hospitals`)
      .then((res) => res.json())
      .then((data) => {
        setCitiesData(data);
        console.log(data);
      });

 
console.log(CitiesData);
  return (
    <div>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {CitiesData.map((element, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{element.name}</td>
                <td>{element.phone}</td>
                <td>{element.address}</td>
                <td>{element.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DisplayData;
