import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-800 text-white  p-5 ">
      <Navbar />

      <MainRoutes />
    </div>
  );
};

export default App;
