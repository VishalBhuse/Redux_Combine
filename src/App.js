import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Requiresauth from "./hoc/Requiresauth";
import Total from "./pages/Total";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
            <header className="App-header"> 
      <Routes>
        <Route
          path="/"
          element={
            <Requiresauth>
              <Home />
            </Requiresauth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path='/todo/:id' element={<Todo />}></Route>
        <Route path='/total' element={ <Requiresauth> <Total /> </Requiresauth>} />

      </Routes>
      </header>

    </div>
  );
}

export default App;
