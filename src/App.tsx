import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import { Guidelines } from "./components/Guidelines/Guidelines";
import { Header } from "./components/Header/Header";
import { BookmarksContextProvider } from "./utils/bookmarks/bookmarksContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
            <Guidelines />
          </div>
        </main>
      </BookmarksContextProvider>
    </QueryClientProvider>
  );
}

export default App;
