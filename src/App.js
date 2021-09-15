import { Container } from "react-bootstrap";
import { Switch, Route, HashRouter } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Masterclass } from "./components/Masterclass";

export const App = () => {
  return (
    <HashRouter>
      <Container fluid className="p-0">
        <Header />
        <Switch>
          <Route path="/masterclass">
            <Masterclass />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route>Not Found</Route>
        </Switch>
      </Container>
    </HashRouter>
  );
};
