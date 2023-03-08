import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import SearchResultPage from "../pages/SearchResultPage";
import PrivateRouter from "./PrivateRouter";
import AppLayout from "./AppLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:searchTerm" element={<SearchResultPage />}></Route>
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />}></Route>
          </Route>
          <Route path="/details/:searchTerm/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
