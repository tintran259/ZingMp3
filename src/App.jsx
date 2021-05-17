import React from "react";
import "./styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ROUTER } from "./contants";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {ROUTER &&
            ROUTER.map((item) => (
              <Route key={item.id} exact={item.exact} path={item.path}>
                <item.component />
              </Route>
            ))}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
