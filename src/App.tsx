import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import { Guidelines } from "./components/Guidelines/Guidelines";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className={styles.header}>
        <h1>Web Sustainability Guidelines</h1>
        <h2>An interactive version of WSG 1.0</h2>
      </header>
      <main>
        <Guidelines />
      </main>
    </QueryClientProvider>
  );
}

export default App;
