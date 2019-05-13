import React from "react";
import SourcesContainer from "./sources/sourcesContainer";
import { Header } from "./header/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "./notFound/404";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/sources" exact component={SourcesContainer} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
