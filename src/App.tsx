import { Switch, Route } from "wouter";
import { Details } from "./pages/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/:symbol" component={Details}></Route>
        <Route>
          404: nothing found!
        </Route>
      </Switch>
    </QueryClientProvider>
  );
};

export default App;
