import axiosBaseURL from "../httpCommon";

export default (() => {
  return {
    // getAll
    getAllBenificiaries: () => {
      return axiosBaseURL.get(`/bankCustomers`);
    },

    // get by ID
    getBenificiaryById: (id) => {
      return axiosBaseURL.get(`/bankCustomers/${id}`);
    },

    // create
    createBenificiary: (payload) => {
      return axiosBaseURL.post(`/bankCustomers`, payload);
    },

    // update
    updateBenificiary: (payload) => {
      const { id } = payload;
      return axiosBaseURL.put(`/bankCustomers/${id}`, payload);
    },

    // update
    deleteBenificiary: (id) => {
      return axiosBaseURL.delete(`/bankCustomers/${id}`);
    },
  };
})();
