import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Architecture from "./pages/Architecture";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";
import UrlAnalyticsPage from "./pages/UrlAnalyticsPage";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/architecture"
          element={<Architecture />}
        />


        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />

        <Route
          path="/analytics/:shortCode"
          element={<UrlAnalyticsPage />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;