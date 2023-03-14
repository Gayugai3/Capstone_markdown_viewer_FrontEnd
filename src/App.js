import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import ChangePassword from "./login_components/ChangePassword";
import { ForgotPassword } from "./login_components/ForgotPassword";
import { Login } from "./login_components/Login";
import Register from "./login_components/Register";
import MdCreator from "./main_component/MdCreator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ToastContainer theme="dark" />
          <UserProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/changepassword/:email" element={<ChangePassword />} />
              <Route path="/mdcreator" element={<MdCreator />} />
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
