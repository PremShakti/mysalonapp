import {
  DELETE_IMAGE_ERROR,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCSESS,
  GET_IMAGE_ERROR,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCSESS,
  POST_IMAGE_REQUEST,
  POST_IMAGE_SUCCSESS,
  UPDATE_IMAGE_ERROR,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCSESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  deleteSucess: false,
  deleteRequest: false,
  deleteError: false,
  updateSucess: false,
  updateRequest: false,
  updateError: false,
  postimageRequest: false,
  postimagesucess: false,
  images: [],

  reviews: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGE_SUCCSESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        images: payload,
      };

    case GET_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_IMAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case DELETE_IMAGE_SUCCSESS:
      return {
        ...state,
        deleteSucess: true,
        deleteRequest: false,
        deleteError: false,
      };

    case DELETE_IMAGE_REQUEST:
      return {
        ...state,
        deleteSucess: false,
        deleteRequest: true,
        deleteError: false,
      };

    case DELETE_IMAGE_ERROR:
      return {
        ...state,
        deleteError: true,
        deleteSucess: false,
        deleteRequest: false,
      };

    case UPDATE_IMAGE_SUCCSESS:
      return {
        ...state,
        updateSucess: true,
        updateRequest: false,
        updateError: false,
      };
    case UPDATE_IMAGE_REQUEST:
      return {
        ...state,
        updateSucess: false,
        updateRequest: true,
        updateError: false,
      };
    case UPDATE_IMAGE_ERROR:
      return {
        ...state,
        updateSucess: false,
        updateRequest: false,
        updateError: true,
      };

    case POST_IMAGE_REQUEST:
      return {
        ...state,
        postimageRequest: true,
        postimagesucess: false,
      };

    case POST_IMAGE_SUCCSESS:
      return {
        ...state,
        postimageRequest: false,
        postimagesucess: false,
      };

    default:
      return state;
  }
};
