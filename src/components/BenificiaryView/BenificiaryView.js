import React, { useState } from "react";

import SidePanel from "../common/SidePanel/SidePanel";
import { connect } from "react-redux";
import style from "./BenificiaryView.module.css";
import { useNavigate } from "react-router-dom";

const BenificiaryView = (props) => {
  const { onViewCloseClick, selected_benificiary } = props;
  const navigate = useNavigate();

  const [_isCloseButtonClicked, _setIsCloseButtonClicked] = useState(false);

  const onSidePanelCloseClick = () => {
    onViewCloseClick();
  };

  const onCloseButtonClick = () => {
    _setIsCloseButtonClicked(true);
  };

  return (
    <SidePanel
      isCloseButtonClicked={_isCloseButtonClicked}
      className={style.sidePanel}
      classNamePanel={style.classNamePanel}
      transformOrigin="right"
      onOverlayClick={onSidePanelCloseClick}
      showOverlay={true}
      dataTest="user-view-sidepanel"
    >
      <div style={{ padding: "16px 40px 40px 40px" }}>
        <div className={style.topContainer}>
          <h3 style={{ marginBottom: "12px", fontWeight: "500" }}>
            View Benificiary
          </h3>
          <span
            onClick={onCloseButtonClick}
            className={`${style.closeButton} cursor-pointer`}
          ></span>
        </div>
        <div className={style.viewDetailContainer}>
          <div>
            <span>Name:</span>
            {selected_benificiary?.name || "-"}
          </div>
          <div>
            <span>Account No:</span>
            {selected_benificiary?.account_no || "-"}
          </div>
          <div>
            <span>Bank Name:</span>
            {selected_benificiary?.bank_name || "-"}
          </div>
          <div>
            <span>Account Type:</span>
            {selected_benificiary?.account_type || "-"}
          </div>
        </div>
      </div>
      <div style={{ margin: "16px 0 0 40px", display: "flex", gap: "14px" }}>
        <button
          style={{
            padding: "12px 28px",
            border: "1px solid #d4eaff",
            backgroundColor: "#40a5ff",
            color: "#fff",
            borderRadius: "6px",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(`/manage-benificiaries/edit/${selected_benificiary?.id}`)
          }
        >
          Edit
        </button>
        <button
          style={{
            padding: "12px 28px",
            border: "1px solid #757575",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={onCloseButtonClick}
        >
          Cancel
        </button>
      </div>
    </SidePanel>
  );
};

const mapStateToProps = (state) => ({
  selected_benificiary: state.selected_benificiary,
});

export default connect(mapStateToProps, {})(BenificiaryView);
