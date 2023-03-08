import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      navigate(`/${searchTerm}`, {
        state: {
          searchTerm: searchTerm,
        },
      });
      setSearchTerm("");
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };
  return (
    <form
      className="flex justify-center items-center p-2 mt-3"
      onSubmit={handleSubmit}
    >
      <input
        type="search "
        className="w-96 h-11 rounded-md outline-none border p-2 m-3 dark:bg-[#e7e7e7] bg-[#23242a]  border-[#e7e7e7]"
        placeholder="Search a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="dark:text-white text-black px-6 h-11 rounded-xl hover:text-[#ff4b45] dark:hover:text-[#ff4b45] hover:scale-110 hover:bg-[#00000085] dark:hover:bg-#ffffff6f"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
