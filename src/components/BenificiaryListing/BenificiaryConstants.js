import { EDIT, EYE, TRASH } from "../../icons";

export const ActionCellRenderer = ({
  data,
  onDeleteClick,
  onEditClick,
  onViewClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "14px",
        height: "100%",
      }}
    >
      <EYE
        onClick={(e) => {
          e.preventDefault();
          onViewClick(data);
        }}
        style={{ cursor: "pointer" }}
      />
      <EDIT onClick={() => onEditClick(data)} style={{ cursor: "pointer" }} />
      <TRASH
        onClick={() => onDeleteClick(data)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export const bankColumnDefs = [
  {
    headerName: "Name",
    field: "name",
    sortable: true,
    unSortIcon: true,
  },
  {
    headerName: "Account No.",
    field: "account_no",
    filter: false,
  },
  {
    headerName: "Bank Name",
    field: "bank_name",
    filter: false,
  },
  {
    headerName: "Account Type",
    field: "account_type",
    filter: false,
  },
];
