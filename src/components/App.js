import React from "react";
import SourcesContainer from "./sources/sourcesContainer";
import { Header } from "./header/header";
import { Route, Switch } from 'react-router-dom';
import NotFound from "./notFound/404";
import TopHeadlinesContainer from "./headlines/topHeadlinesContainer";


const App = () => {
  return (
    <React.Fragment> 
      <Header />
      <Switch>
        <Route path="/" exact component={SourcesContainer} />
        <Route path="/headlines/:id" component={TopHeadlinesContainer} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
