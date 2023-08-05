import React, { useState, useEffect } from 'react'; // Import React
import ManCityImage from './images/mancity.png';
import RealImage from './images/real.png';
import './App.css';

function App() {
  const [ManCityscores, setManCityscores] = useState(0);
  const [Realscores, setRealscores] = useState(0);
  const [bgcolor, setbgColor] = useState(''); // Corrected 'cont' to 'const'

  useEffect(() => {
    if (ManCityscores > Realscores) {
      setbgColor('Blue');
    } else if (ManCityscores === Realscores) {
      setbgColor('Black');
    } else {
      setbgColor('white');
    }
  }, [ManCityscores, Realscores]);

  const add = (x) => {
    return x + 1;
  };

  return (
    <div className="App">
          <h1>Live Scores</h1>

          <div className='container'>

                <div className='ManCity'>
                  <img src={ManCityImage} alt="Man City" />
                  <p className='club-name'>Man City </p>
                  <p className='grade'>{ManCityscores}</p>
                </div>

                <h2>VS</h2>

                <div className='Realmadrid'>
                  <img src={RealImage} alt="Real Madrid" />
                  <p className='club-name'>Real Madrid</p> 
                  <p className='grade'>{Realscores}</p>
                </div>

                
          </div>

          <div className="btn-continer">
                <button className='ManCityBtn' onClick={() => { setManCityscores(add(ManCityscores)); }}>
                  Update M.C Scores 
                </button>
                <button className='RealBtn' onClick={() => {setRealscores(add(Realscores));}}> 
                  Update R.M Scores
                </button>
          </div>
    </div>
  );
}

export default App;