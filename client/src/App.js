import { Route, Routes } from "react-router-dom";
import FinishOrder from "./component/FinishOrder";
import FreshHome from "./component/FreshHome";
import FreshOrder from "./component/FreshOrder";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FreshHome />} />
      <Route exact path="/FreshOrder" element={<FreshOrder />} />
      <Route exact path="/FinishOrder" element={<FinishOrder />} />
    </Routes>
  );
};

export default App;
