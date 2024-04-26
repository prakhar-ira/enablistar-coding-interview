import { GET_BENIFICIARY } from "../actions/type";

const initialBenificiaryState = {};

function benificaryReducer(
  selectedBenificiary = initialBenificiaryState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case GET_BENIFICIARY:
      return payload;

    default:
      return selectedBenificiary;
  }
}

export default benificaryReducer;
