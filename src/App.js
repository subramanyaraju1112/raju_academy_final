import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import Heading from "./components/Heading";
import Nav_tab from "./components/Nav_tab";
import Mini_heading from "./components/Mini_heading";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Development from "./components/Development";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <NavBar title="RAJU's Academy" login="Login" signUp="Sign-Up" />
      <Alert />
      <Heading />
      <Carousel />
      <Mini_heading />
      <Nav_tab />
      <Development />
      <Category />
      <Footer />
    </>
  );
}

export default App;
