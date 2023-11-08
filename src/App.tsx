import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import { Guidelines } from "./components/Guidelines/Guidelines";
import { Header } from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Guidelines />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
