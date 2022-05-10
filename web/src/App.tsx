import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Widget } from "./components/Widget";
import { UserProvider } from "./hook/useAuth";

export function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <Widget />
    </UserProvider>
  );
}
