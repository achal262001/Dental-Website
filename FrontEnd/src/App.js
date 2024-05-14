import "./App.css";
import LogIn from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import MainPage from "./Screens/MainPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Doctor from "./Screens/Doctors";
import Home from "./Screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn></LogIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/" element={<MainPage></MainPage>}>
          <Route path="/login" element={<LogIn></LogIn>} />
          <Route path="/doctor" element={<Doctor></Doctor>} />
          <Route path="/home" element={<Home></Home>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
