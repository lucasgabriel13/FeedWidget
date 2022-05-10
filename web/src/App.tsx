import { UserProvider } from "./hook/useAuth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}
