import { Fragment } from "react";
import { Redirect, Switch,  Route } from "react-router";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import {AboutPage} from "./AboutPage/AboutPage";
import {AuthorsPage} from "./AuthorsPage/AuthorsPage";
import {HomePage} from "./HomePage/HomePage";


const NotFoundPage = () => <div>Page not found</div>;

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/authors" component={AuthorsPage} />       
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/not-found" />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
