import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  createBenificiary,
  findBenificiaryById,
  updateBenificiary,
} from "../../actions/benificiaries";

import Input from "../common/Input/Input";
import { confirmAlert } from "react-confirm-alert"; // Import
import { connect } from "react-redux";
import styles from "./BenificiaryForm.module.css";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BenificiaryForm = ({
  selected_benificiary,
  createBenificiary,
  findBenificiaryById,
  updateBenificiary,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, formState, setValue } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    defaultValues: location.pathname.includes("add")
      ? {
          name: "",
          bank_name: "",
          account_no: "",
          account_type: "",
        }
      : selected_benificiary,
  });

  const onCancelClick = () => {
    navigate("/manage-benificiaries");
  };

  const onFinalSubmit = async (data) => {
    const reqPayload = {
      ...data,
      id: location.pathname?.includes("add")
        ? crypto.randomUUID()
        : selected_benificiary?.id,
    };

    try {
      location.pathname?.includes("add")
        ? await createBenificiary(reqPayload)
        : await updateBenificiary(reqPayload);
      toast.success(
        location.pathname?.includes("add")
          ? "Benificiary created successfully!!"
          : "Benificiary updated successfully!!",
        {
          toastId: "benificiary-created-success",
        }
      );
      setTimeout(() => {
        navigate("/manage-benificiaries");
      }, 300);
    } catch (err) {
      toast.error("Benificiary modification failed!!", {
        toastId: "benificiary-created-failed",
      });
    }
  };

  useEffect(() => {
    if (location.pathname?.includes("edit")) {
      const arr = location?.pathname && location?.pathname?.split("/");
      const id = arr[arr.length - 1];
      if (id?.length) {
        findBenificiaryById(id);
      }
    }
  }, [location.pathname,findBenificiaryById ]);

  useEffect(() => {
    if (location.pathname?.includes("edit")) {
      setValue("name", selected_benificiary.name);
      setValue("id", selected_benificiary.id);
      setValue("bank_name", selected_benificiary.bank_name);
      setValue("account_type", selected_benificiary.account_type);
      setValue("account_no", selected_benificiary.account_no);
    }
    //eslint-disable-next-line
  }, [selected_benificiary]);


  const onSubmit = (data) => {
    confirmAlert({
      title: `${
        location.pathname?.includes("add") ? "Add New" : "Update"
      } Benificiary`,
      message: `Clicking on yes will ${
        location.pathname?.includes("add") ? "add a new" : "update"
      } benificiary, press yes to procced!!`,
      buttons: [
        {
          label: "Yes",
          onClick: () => onFinalSubmit(data),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
      closeOnEscape: true,
    });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <h2 className={styles.heading}>
            {location.pathname?.includes("add") ? "Add" : "Update"} Benificiary
          </h2>
          <form className={styles.formContainer}>
            <fieldset className={styles.fieldSet}>
              <Input
                className={styles.inputForm}
                type="text"
                name="name"
                register={register}
                required={true}
                label={`Name`}
                errorText={
                  formState.errors.hasOwnProperty("name")
                    ? "Name is required"
                    : ""
                }
                placeholder={`Enter name`}
              />
              <Input
                className={styles.inputForm}
                type="text"
                maxLength="26"
                name="account_no"
                pattern="\d*"
                register={register}
                required={true}
                label={`Account No.`}
                errorText={
                  formState.errors.hasOwnProperty("account_no")
                    ? formState.errors.account_no.type === "required"
                      ? "Account no is required"
                      : "Please enter valid account number"
                    : ""
                }
                placeholder={`Enter account no.`}
              />
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <Input
                className={styles.inputForm}
                type="text"
                register={register}
                name="bank_name"
                required={true}
                label={`Bank Name`}
                placeholder={`Enter bank name`}
                errorText={
                  formState.errors.hasOwnProperty("bank_name")
                    ? "Bank name is required"
                    : ""
                }
              />
              <Input
                className={styles.inputForm}
                type="text"
                register={register}
                name="account_type"
                required={true}
                label={`Account Type`}
                placeholder={`Enter account type`}
                errorText={
                  formState.errors.hasOwnProperty("account_type")
                    ? "Account type is required"
                    : ""
                }
              />
            </fieldset>
            <fieldset className={`${styles.fieldSet} ${styles.buttonSet}`}>
              <button
                type="button"
                className={`${styles.submitButton}`}
                onClick={handleSubmit(onSubmit)}
              >
                {location.pathname?.includes("add") ? "Add" : "Update"}
              </button>
              <button
                style={{
                  padding: "12px 28px",
                  border: "1px solid #757575",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={onCancelClick}
              >
                Cancel
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  selected_benificiary: state.selected_benificiary,
});

export default connect(mapStateToProps, {
  createBenificiary,
  findBenificiaryById,
  updateBenificiary,
})(BenificiaryForm);
