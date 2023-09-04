import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                </>
              }
            ></Route>
            <Route path="/fav" element={<Favourites />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
