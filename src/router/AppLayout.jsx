import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
