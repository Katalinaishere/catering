
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Outline from './changingparts/Outline';
import Appetizer from './changingparts/Appetizer';
import TwoSplit from './changingparts/TwoSplit';
import Reservation from './changingparts/Reservation';
import SecondPlate from './changingparts/SecondPlate';


function App() {
  return (
    <div>

    <Outline/>
    <div className='main'>
    <Appetizer/>
         <TwoSplit/>
         <SecondPlate/>
         <Reservation/>
    </div>
   
    </div>

    

    
  );
}

export default App;
