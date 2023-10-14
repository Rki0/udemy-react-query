import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { InfinitePeople } from "./people/InfinitePeople";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;