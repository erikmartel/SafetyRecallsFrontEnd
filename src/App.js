import './App.css';
import Header from './components/header/header';
import Checker from './components/checker/checker';

import RecallCard from './components/recallCard/recallCard';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="appContainer">
      <Checker />
      </div>

      <div className="recallListContainer">
      <RecallCard />
        
      </div>
    </div>
  );
}

export default App;
