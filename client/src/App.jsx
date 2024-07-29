import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PostRide from "./pages/PostRide";
import FindRide from "./pages/FindRide";
import BookRide from "./pages/BookRide";
import PassChat from "./pages/PassChat";
import DriverChats from "./pages/DriverChats";
import ProtectedRoute from "./utils/ProtectedRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/postride", element: <ProtectedRoute element={PostRide} /> },
  { path: "/findride", element: <ProtectedRoute element={FindRide} /> },
  { path: "/book-ride/:rideId", element: <BookRide /> },
  { path: "/message/:contactId", element: <PassChat /> },
  { path: "/messages", element: <DriverChats /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
