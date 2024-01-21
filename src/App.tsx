import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Guideline } from "./pages/Guideline/Guideline";
import { Guidelines } from "./pages/Guidelines/Guidelines";
import { BookmarksContextProvider } from "./utils/bookmarks/bookmarksContext";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <BookmarksContextProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
            <Routes>
              <Route path="/" Component={Guidelines} />
              <Route path="/:id/:slug?" Component={Guideline} />
            </Routes>
          </div>
        </main>
      </BookmarksContextProvider>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
