import { ActionCellRenderer, bankColumnDefs } from "./BenificiaryConstants";
import React, { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteBenificiary,
  findBenificiaryById,
  getAllBenificiaries,
} from "../../actions/benificiaries";

import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import BenificiaryView from "../BenificiaryView/BenificiaryView";
import { confirmAlert } from "react-confirm-alert"; // Import
import { connect } from "react-redux";
import styles from "./BenificiaryListing.module.css";
import { useNavigate } from "react-router-dom";

const BenificiaryListing = ({
  benificiaries,
  getAllBenificiaries,
  findBenificiaryById,
  deleteBenificiary,
}) => {
  const [_showViewModal, _setShowViewModal] = useState(false);

  const navigate = useNavigate();

  const defaultColDefMemoized = useMemo(() => {
    return {
      flex: 1,
      filter: false,
    };
  }, []);

  const gridStyle = useMemo(
    () => ({ height: "100%", width: "100%", padding: "30px 80px 0 80px" }),
    []
  );

  const handleClick = () => {
    navigate("/manage-benificiaries/add");
  };

  const onDeleteBenificiary = async (data) => {
    try {
      await deleteBenificiary(data.id);
      toast.success("Benificiary deleted successfully!!", {
        toastId: "benificiary-upload-success",
      });
      await getAllBenificiaries();
    } catch (err) {
      toast.error("Benificiary deletion failed!!", {
        toastId: "benificiary-upload-success",
      });
    }
  };

  const onDeleteClick = (data) => {
    confirmAlert({
      title: "Are you sure?",
      message:
        "This action is irreversible, once you delete it will be deleted permanently!!",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDeleteBenificiary(data),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
      closeOnEscape: true,
    });
  };

  const onViewClick = async (data) => {
    await findBenificiaryById(data.id);
    _setShowViewModal(true);
  };

  useEffect(() => {
    getAllBenificiaries();
  }, [getAllBenificiaries]); // Dependency array to avoid infinite loop

  const onEditClick = (data) => {
    navigate(`/manage-benificiaries/edit/${data.id}`);
  };

  const columnDefs = [
    ...bankColumnDefs,
    {
      field: "action",
      cellRenderer: ActionCellRenderer,
      cellRendererParams: {
        onEditClick,
        onViewClick,
        onDeleteClick,
      },
      filter: false,
      cellStyle: { textAlign: "center" },
      maxWidth: 150,
    },
  ];

  const onViewCloseClick = () => {
    _setShowViewModal(false);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <h2 className={styles.heading}>Benificiaries</h2>
          <div style={{ display: "flex", gap: "14px" }}>
            <button
              className="buttonPrimary"
              type="button"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="buttonPrimary"
              type="button"
              onClick={handleClick}
            >
              Add Benificiary
            </button>
          </div>
        </div>
        <div className="ag-theme-quartz" style={gridStyle}>
          <AgGridReact
            animateRows={true}
            rowData={benificiaries} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            enableCellTextSelection={false}
            suppressRowClickSelection={true}
            domLayout="autoHeight"
            defaultColDef={defaultColDefMemoized}
            // onCellClicked={onCellClicked}
          />
        </div>
      </div>
      {_showViewModal && (
        <BenificiaryView
          onViewCloseClick={onViewCloseClick}
          onEditClick={onEditClick}
        />
      )}
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  benificiaries: state.benificiaries,
});

export default connect(mapStateToProps, {
  getAllBenificiaries,
  findBenificiaryById,
  deleteBenificiary,
})(BenificiaryListing);
