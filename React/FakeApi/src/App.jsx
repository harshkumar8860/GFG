import "./App.css";
import DataFetchUsingApi from "./DataFetchUsingApi";
import DonateComponent from "./DonateComponent";
import DocsComponent from "./DocsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponet from "./ProductComponet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataFetchUsingApi />}></Route>
        <Route path="/product/:id" element={<ProductComponet />}></Route>
        <Route path="donate" element={<DonateComponent />}></Route>
        <Route path="docs" element={<DocsComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
