import axios from "axios";
import {
  GET_IMAGE_BANNER_ERROR,
  GET_IMAGE_BANNER_REQUEST,
  GET_IMAGE_BANNER_SUCCSESS,
  GET_IMAGE_GALLERY_SLIDER_ERROR,
  GET_IMAGE_GALLERY_SLIDER_REQUEST,
  GET_IMAGE_GALLERY_SLIDER_SUCCSESS,
  GET_REVIEW_SUCCSESS,
  GET_REVIEW_REQUEST,
  GET_REVIEW_ERROR,
  GET_REVIEW_DELETE_SUCCSESS,
  GET_REVIEW_DELETE_REQUEST,
  GET_REVIEW_DELETE_ERROR
} from "./ActionType";

export const bannerSliderImages = (data) => (dispatch) => {
  dispatch({ type: GET_IMAGE_BANNER_REQUEST });

  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/getgallerybannerslider?categary=BannerSliderImage`
    )
    .then((res) =>
      dispatch({ type: GET_IMAGE_BANNER_SUCCSESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_IMAGE_BANNER_ERROR }));
};

export const GallerySliderImage = (data) => (dispatch) => {
  dispatch({ type: GET_IMAGE_GALLERY_SLIDER_REQUEST });

  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/getgallerybannerslider?categary=GallerySliderImage`
    )
    .then((res) =>
      dispatch({ type: GET_IMAGE_GALLERY_SLIDER_SUCCSESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_IMAGE_GALLERY_SLIDER_ERROR }));
};



export const getReview = (data) => (dispatch) => {
  dispatch({ type: GET_REVIEW_REQUEST });

  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/getreview`
    )
    .then((res) =>
      dispatch({ type: GET_REVIEW_SUCCSESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_REVIEW_ERROR }));
};


export const reviewDelete = (id) => (dispatch) => {
  dispatch({ type: GET_REVIEW_DELETE_REQUEST });

 return axios
    .delete(
      `${process.env.REACT_APP_BASE_URL}/getreviewdelete/${id}`
    )
    .then((res) =>
      dispatch({ type: GET_REVIEW_DELETE_SUCCSESS })
    )
    .catch((err) => dispatch({ type: GET_REVIEW_DELETE_ERROR }));
};
