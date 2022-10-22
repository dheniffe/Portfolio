import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Home from "../pages/home";
import About from '../pages/about';
import Projects from '../pages/projects';
import Contacts from '../pages/contacts';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Switch>
    </Router>
  );
};

export default Routes;
