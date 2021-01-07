import GlobalStyle from "./components/globalStyles";
import { AnimatePresence } from "framer-motion";
import AboutUs from "./pages/aboutUs";
import Nav from "./components/nav";
import OurWork from "./pages/ourWork";
import MovieDetail from "./pages/movieDetail";
import ContactUs from "./pages/contactUs";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
