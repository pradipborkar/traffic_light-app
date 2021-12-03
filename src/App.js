import './App.css';
import Light from './light/Light'

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Traffic Light App By React Js</h1>
      <div className="d-flex justify-content-center mt-4">
      <Light />
      </div>
    </div>
  );
}

export default App;
