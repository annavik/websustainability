import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { ScrollHandler } from "./components/ScrollHandler/ScrollHandler";
import { Guideline } from "./pages/Guideline/Guideline";
import { Guidelines } from "./pages/Guidelines/Guidelines";
import { BookmarksContextProvider } from "./utils/bookmarks/bookmarksContext";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [searchString, setSearchString] = useState("");

  return (
    <BrowserRouter>
      <BookmarksContextProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
            <Routes>
              <Route
                path="/"
                element={
                  <Guidelines
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    searchString={searchString}
                    setSearchString={setSearchString}
                    showAll={showAll}
                    setShowAll={setShowAll}
                  />
                }
              />
              <Route path="/:id/:slug?" element={<Guideline />} />
            </Routes>
          </div>
        </main>
      </BookmarksContextProvider>
      <ScrollHandler />
    </BrowserRouter>
  );
}

export default App;
