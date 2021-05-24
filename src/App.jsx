import React from "react";
import "./styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ROUTER } from "./contants";

import MultiLangContextProvider from "./context/multiLang";

function App() {
  return (
    <MultiLangContextProvider>
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
    </MultiLangContextProvider>
  );
}

export default App;
