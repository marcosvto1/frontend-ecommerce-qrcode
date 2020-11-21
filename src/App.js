import React, { useContext } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import ProductDetailScreen from "./screens/product_detail";
import { store } from "./store";

const App = () => {

  const { state } = useContext(store)

  return (
    <div className={state.isDark ? 'App App-dark': 'App App-light'}>
      <BrowserRouter>
        <Switch>
          <Route path="/product/:id" component={ProductDetailScreen} />
          <Route path="/" component={HomeScreen}></Route>
          <Route component={() => <h1>Não encontrado</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
