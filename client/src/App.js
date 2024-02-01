import { Route, Routes } from "react-router-dom";
import FinishOrder from "./component/FinishOrder";
import FreshHome from "./component/FreshHome";
import FreshOrder from "./component/FreshOrder";
import PrevFresh from "./component/PrevFresh";

const App = () => {
  return (
    <Routes>
      <Route path="/PrevFresh" element={<PrevFresh />} />
      <Route path="/FreshHome" element={<FreshHome />} />
      <Route path="/FreshOrder" element={<FreshOrder />} />
      <Route path="/FinishOrder" element={<FinishOrder />} />
    </Routes>
  );
};

export default App;
