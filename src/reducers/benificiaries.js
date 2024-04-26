import {
  CREATE_BENIFICIARY,
  DELETE_BENIFICIARY,
  GET_ALL_BENIFICIARY,
  UPDATE_BENIFICIARY,
} from "../actions/type";

const initialState = [];

function benificaryReducer(benificiaries = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BENIFICIARY:
      return [...benificiaries, payload];

    case GET_ALL_BENIFICIARY:
      return payload.reverse();


    case UPDATE_BENIFICIARY:
      return benificiaries.map((benificiary) => {
        if (benificiary.id === payload.id) {
          return {
            ...benificiary,
            ...payload,
          };
        } else {
          return benificiary;
        }
      });

    case DELETE_BENIFICIARY:
      return benificiaries.filter(({ id }) => id !== payload.id);

    default:
      return benificiaries;
  }
}

export default benificaryReducer;
