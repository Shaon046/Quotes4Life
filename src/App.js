import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      {" "}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/new-quote" exect>
          {" "}
          <NewQuotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />{" "}
        </Route>
        <Route path='*'><NotFound/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
