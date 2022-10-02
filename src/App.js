import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/create-event" element={<CreateEvent />}></Route>
          {/* <Route exact path="/event" element={<EventMenu />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
