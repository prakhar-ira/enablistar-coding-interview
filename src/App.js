import "./App.css";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

import BenificiaryListing from "./components/BenificiaryListing/BenificiaryListing";
import ManageBenificiary from "./components/ManageBenificiary/ManageBenificiary";
import BenificiaryForm from "./components/BenificiaryForm/BenificiaryForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ManageBenificiary />} />
        <Route path="/manage-benificiaries" element={<BenificiaryListing />} />
        <Route path="/manage-benificiaries/add" element={<BenificiaryForm />} />
        <Route
          path="/manage-benificiaries/edit/:id"
          element={<BenificiaryForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
