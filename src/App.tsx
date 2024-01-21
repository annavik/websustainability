import styles from "./App.module.css";
import { Guidelines } from "./pages/Guidelines/Guidelines";
import { Header } from "./components/Header/Header";
import { BookmarksContextProvider } from "./utils/bookmarks/bookmarksContext";

function App() {
  return (
    <BookmarksContextProvider>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Guidelines />
        </div>
      </main>
    </BookmarksContextProvider>
  );
}

export default App;
