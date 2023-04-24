import "./App.css";
import CompareProducts from "./components/CompareProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Product Comparison</h1>
      <Router>
        <Routes>
          <Route exact path="/compare" element={<CompareProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
