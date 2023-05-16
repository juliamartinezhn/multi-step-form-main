import './App.css';
import StepsAsideBar from './components/StepsAsideBar';
import Form from './components/Form';


function App() {

  return (
    <div className="App">
      <div className='App__container'>

        <StepsAsideBar />
        <Form />
        {/* {chooseStep(currentStep)} */}

      </div>
    </div>
  );
};

export default App;
