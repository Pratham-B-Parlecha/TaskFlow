import "./App.scss";
import Card from "./Components/Card";
import SideBar from "./Components/SideBar";


function App() {
  return (
    <div className="mainContainer">
      <SideBar />
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;