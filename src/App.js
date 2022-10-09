import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import "./components/navbar/Navbar.css";
import "./components/cards/Card.css";
import "./components/header/Header.css";
import Header from "./components/header/Header.js";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App">
      <div className="containerBox">
        <Navbar />
        <Header data={data} />
      </div>
    </div>
  );
}

export default App;
