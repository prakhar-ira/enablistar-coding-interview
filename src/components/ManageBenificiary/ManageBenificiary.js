import React from "react";
import styles from "./ManageBenificiary.module.css";
import { useNavigate } from "react-router-dom";

function ManageBenificiary() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/manage-benificiaries");
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Welcome to the <br /> Online Banking Portal</h2>
      <button className="buttonPrimary" type="button" onClick={handleClick}>
        Manage Benificiaries
      </button>
    </div>
  );
}

export default ManageBenificiary;
