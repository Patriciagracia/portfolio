import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Outlet } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavBar />
      <Outlet />
    </I18nextProvider>
  );
}

export default App;
