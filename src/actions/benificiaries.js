import {
  CREATE_BENIFICIARY,
  GET_BENIFICIARY,
  GET_ALL_BENIFICIARY,
  UPDATE_BENIFICIARY,
  DELETE_BENIFICIARY,
  RESET_STATE,
} from "./type";

import api from "../services/benificiary.service";

export const getAllBenificiaries = () => async (dispatch) => {
  try {
    const res = await api.getAllBenificiaries();

    dispatch({
      type: GET_ALL_BENIFICIARY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createBenificiary = (payload) => async (dispatch) => {
  try {
    const res = await api.createBenificiary(payload);

    dispatch({
      type: CREATE_BENIFICIARY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateBenificiary = (payload) => async (dispatch) => {
  try {
    const res = await api.updateBenificiary(payload);

    dispatch({
      type: UPDATE_BENIFICIARY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBenificiary = (id) => async (dispatch) => {
  try {
    await api.deleteBenificiary(id);

    dispatch({
      type: DELETE_BENIFICIARY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findBenificiaryById = (id) => async (dispatch) => {
  try {
    const res = await api.getBenificiaryById(id);

    dispatch({
      type: GET_BENIFICIARY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
