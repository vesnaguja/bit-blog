import { Fragment } from "react";
import { Redirect, Switch, Route } from "react-router";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthorsPage } from "./AuthorsPage/AuthorsPage";
import { HomePage } from "./HomePage/HomePage";
import { Post } from "./Post/Post";

const NotFoundPage = () => <h2 className="m-5 p-5 text-center">Page not found</h2>;

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id/" component={Post} />
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
