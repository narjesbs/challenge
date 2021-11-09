import logo from './logo.svg';
import './App.css';
import './css/style.css';

import HeaderPage from "./components/header.js";
import AboutPage from "./components/about.js";
import ContactPage from "./components/contact.js";
import ProjectPage from "./components/project.js";
import FooterPage from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <AboutPage />
      <ContactPage />
      <ProjectPage />
      <FooterPage />
    </div>
  );
}

export default App;
