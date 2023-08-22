import './App.css';

function App() {
  return (
    <div className="App">
     

      <div className="appContainer">
      <header className="appHeader">
        <h1 className="appTitle">Safety Recall Checker</h1>
      </header>
        <div className= "checkerContainer">
          
            <label className="driverSelectorLabel" for="driverSelector">Who's driving?</label>
            <select className='driverSelectorDropdown' id="driverSelector">Who's driving?</select>
            <button color = "#1AFFFF" className="recallSubmitButton">Check my recalls</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
