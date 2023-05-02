import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Notes from "./components/Notes";

function App() {
  
  return (
    <>
      <div className="container">
        <Header />
        <Form />
        <Notes />
      </div>
    </>
  );
}

export default App;
