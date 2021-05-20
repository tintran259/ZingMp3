// libs
import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// contants
import CONTANTS from "./contants";
// store
import Store from "./reducer";
// orthers
import "./styles.scss";

function App() {
  const { ROUTER } = CONTANTS;
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            {ROUTER &&
              ROUTER.map((item) => (
                <Route key={item.id} exact={item.exact} path={item.path}>
                  {item.redirect ? (
                    <Redirect to={item.redirect}>
                      <item.component />
                    </Redirect>
                  ) : (
                    <item.component />
                  )}
                </Route>
              ))}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
