import './App.css';
import { MyButton, MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  const handleClick = (event) => {
    // Handle the button click event here
    console.log('Button clicked!', event);
  };
  return (
    <div className="App">
      <MyComponent first="Your" last="Name" />
      HI
      <MyButton onButtonClick={handleClick} color="blue" text="Click Me!" />
    </div>
  );
}

export default App;