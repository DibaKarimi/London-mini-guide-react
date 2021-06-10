import "./App.css";
import SelectCity from "./SelectCity";
import DisplayData from "./DisplayData"

// Display a title in the center on the website
// Display the available cities in a dropdown menu
// Display the category buttons
// Display table with fake data
// No need to do a fetch at this time
// Just make sure it works with the JSON from the Server.

function App() {
  return (
    <div className="App">
      <h1 className="mt-3">City Mini Guide</h1>
      <div className="container">
        <SelectCity />
        <div className="row ">
          <button className="col-2  btn btn-primary mx-auto">Pharmacies</button>
          <button className="col-2  btn btn-primary mx-auto">
            schools & colleges
          </button>
          <button className="col-2  btn btn-primary mx-auto">hospitals</button>
          <button className="col-2  btn btn-primary mx-auto">doctors</button>
        </div>
       <DisplayData />
      </div>
    </div>
  );
}

export default App;
