import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Architecture from "./pages/Architecture";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";
import UrlAnalyticsPage from "./pages/UrlAnalyticsPage";
import ExpiredLink from "./pages/ExpiredLink";
import PrivateRoute from "./components/PrivateRoute";


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
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
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
          element={
            <PrivateRoute>
              <AnalyticsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/analytics/:shortCode"
          element={
            <PrivateRoute>
              <UrlAnalyticsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/expired-link"
          element={<ExpiredLink />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;