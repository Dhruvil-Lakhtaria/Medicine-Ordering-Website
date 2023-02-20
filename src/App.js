import "./css/Homepage.css";
import "./css/Snooze.css";
import "./css/Appointment.css";
import "./css/LoginPage.css";
import "./css/MyMeds.css";
import Home from "./components/Homepage/Home";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import MyMedsPage from "./components/MyMedsPage/MyMeds";
import LoginForm from "./components/RegisterPage/LoginForm";
import Navbar from "./components/Homepage/Navbar";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // const [userId,setUserId] = useState("");
  const onLogin = (loggedDetail) => {
    console.log(loggedDetail);
    //   let queryString = "http://localhost:8000/auth/login";
    //   queryString = queryString
    //     .concat("?name=")
    //     .concat(loggedDetail.name)
    //     .concat("&password=")
    //     .concat(loggedDetail.password);
    //   axios.get(queryString).then((res) => {
    //     if (res.data.length !== 1) {
    //       alert("Login Failed");
    //     } else {
    //       alert("Logged In");
    //       setUserId(res.data[0]);
    //     }
    //   });
  };
  const onRegister = (userDetail) => {
    console.log(userDetail);
    //   let queryString = "http://localhost:8000/auth/register";
    //   queryString = queryString
    //     .concat("?name=")
    //     .concat(userDetail.name)
    //     .concat("&email=")
    //     .concat(userDetail.email)
    //     .concat("&password=")
    //     .concat(userDetail.password);
    //   axios.post(queryString).then((res) => {
    //     console.log(res.data);
    //     alert("Registered!");
    // setUserId(res.data._id);
    //   });
  };
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Medicine-Ordering-Website" element={<Home />} />
          <Route path="/Medicine-Ordering-Website/appointment" element={<AppointmentPage />} />
          <Route path="/Medicine-Ordering-Website/mymeds" element={<MyMedsPage />} />
          <Route
            path="/Medicine-Ordering-Website/auth"
            element={<LoginForm onRegister={onRegister} onLogin={onLogin} />}
          />
        </Routes>
      </div>
  );
}

export default App;
