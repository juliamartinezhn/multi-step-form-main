import './App.css';
import StepsAsideBar from './components/StepsAsideBar';
import Form from './components/Form';
// import { useState } from 'react';

function App() {
  // const [current, setCurrent] = useState(1);

  // const currentStep = (current) => {
  //   setCurrent(current);
  // }

  return (
    <div className="App">
      <div className='App__container'>

        <StepsAsideBar />
        <Form />

      </div>
    </div>
  );
};

export default App;
