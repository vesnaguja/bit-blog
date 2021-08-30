import { Fragment } from "react";
import { Switch, Route } from "react-router";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { AboutPage } from "./AboutPage/AboutPage";
import { AuthorsPage } from "./AuthorsPage/AuthorsPage";
import { HomePage } from "./HomePage/HomePage";
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";

const NotFoundPage = () => <h2 className="m-5 p-5 text-center">Page not found</h2>;

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/authors/:userId" component={AuthorPage} />
        <Route exact path="/authors" component={AuthorsPage} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
