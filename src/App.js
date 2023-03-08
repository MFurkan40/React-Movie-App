import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
