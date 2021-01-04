import GlobalStyle from "./components/globalStyles";

import AboutUs from "./pages/aboutUs";
import Nav from "./components/nav";
import OurWork from "./pages/ourWork";
import ContactUs from "./pages/contactUs";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
