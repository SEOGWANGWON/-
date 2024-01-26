import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FreshHome from "./FreshHome";

function Link() {
  return (
    <Router>
      <Routes>
        {/*프레쉬*/}
        <Route path="/" element={<FreshHome />}>
          1
        </Route>
      </Routes>
    </Router>
  );
}
export default Link;
