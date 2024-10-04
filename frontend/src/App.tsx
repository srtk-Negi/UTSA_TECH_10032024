import EventsPage from "./pages/eventPage";
import TrailPage from "./pages/trailsPage";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <EventsPage />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <div className="bg-lightestBrown">
                <Navbar />
                <EventsPage />
              </div>
            }
          />
          <Route
            path="/trails"
            element={
              <>
                <Navbar />
                <TrailPage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
