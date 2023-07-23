import { HEADER_TYPE_HOME, HEADER_TYPE_OTHER } from "./ActionType";

const initial = {
  headerType: true,
};
export const reducer = (state = initial, { type, payload }) => {
  
  switch (type) {
    case HEADER_TYPE_HOME: {
      return {
        ...state,
        headerType: true,
      };
    }
    case HEADER_TYPE_OTHER: {
        return {
          ...state,
          headerType: false,
        };
      }

    default:
      return state;
  }
};
