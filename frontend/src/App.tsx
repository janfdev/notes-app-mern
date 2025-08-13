import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./utils/protectedRoute";
import ErrorPage from "./pages/Error/ErrorPage";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home/Home";
import { ToastContainer, Bounce } from "react-toastify";

const App = () => {
  return (
    <UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
