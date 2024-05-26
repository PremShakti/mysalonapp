import { DELETE_SERVICES_SUCCSESS, GET_SERVICES_SUCCSESS } from "./ActionType";

const initialState = {
  getServicessucses: false,
  servicesData: [
    { categary: "Gents", name: "Head massage", price: "2200" },
    { categary: "Ladies", name: "Head massage", price: "4200" },
    { categary: "Ladies/Gents", name: "Head massage", price: "2200" },
    { categary: "Gents", name: "hair cutting", price: "2200" },
  ],
  deleteSucess: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SERVICES_SUCCSESS:
      return {
        ...state,
        getServicessucses: true,
        servicesData: payload,
      };

    case DELETE_SERVICES_SUCCSESS:
      return {
        ...state,
        deleteSucess: true,
      };

    default:
      return state;
  }
};
