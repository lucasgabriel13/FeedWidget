import { UserProvider } from "./hook/useAuth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import Routes from "./routes";

export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}
