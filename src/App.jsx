import "./App.css";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <div className="card">
        <h1 className="title">Quote of the Day</h1>
        <Quote />
      </div>
    </>
  );
}

export default App;
