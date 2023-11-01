import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Guidelines } from "./components/Guidelines/Guidelines";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>🌱 Welcome to WSG renderer 🌱</h1>
      <Guidelines />
    </QueryClientProvider>
  );
}

export default App;
