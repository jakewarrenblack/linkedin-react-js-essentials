import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location,
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/services" element={<Services />} />
          <Route path="/about/history" element={<CompanyHistory />} />
          <Route path="/about/location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        {/* If you go to a non-existent route, '*' will cover it */}
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
