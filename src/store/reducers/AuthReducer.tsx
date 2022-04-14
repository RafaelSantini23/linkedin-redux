export const INITIAL_STATE = {
  auth: {
    token: "",
    auth: false,
    /*
    name: "",
    lastName: "",
    image: "",
    pais: "",
    */
    loading: true,
    error: false,
  },
};
const authReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === "SET_AUTH") {
    return {
      ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      },
    };
  }
};
export default authReducer;
