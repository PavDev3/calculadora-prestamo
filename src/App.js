import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderSelect/>
      <TenureSelect/>
      <Result/>
    </div>
  );
}

export default App;
