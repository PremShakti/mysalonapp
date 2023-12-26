import {
  GET_IMAGE_BANNER_REQUEST,
  GET_IMAGE_BANNER_SUCCSESS,
  GET_IMAGE_GALLERY_SLIDER_REQUEST,
  GET_IMAGE_GALLERY_SLIDER_SUCCSESS,
  GET_REVIEW_DELETE_REQUEST,
  GET_REVIEW_DELETE_SUCCSESS,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCSESS,
} from "./ActionType";

const initialState = {
  isLoadingBANNER: false,
  isErrorBANNER: false,
  isLodingGALLERY: false,
  isErrorGALLERY: false,
  imagesForBannerSlider: [],
  imagesForGallerySlider: [],
  revieswloading:false,
  
  reviews: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_IMAGE_BANNER_SUCCSESS:
      return {
        ...state,
        isLoadingBANNER: false,
        isErrorBANNER: false,
        imagesForBannerSlider: payload,
      };
    case GET_IMAGE_BANNER_REQUEST:
      return {
        ...state,
        isLoadingBANNER: true,
        isErrorBANNER: false,
      };

    case GET_IMAGE_GALLERY_SLIDER_SUCCSESS:
      return {
        ...state,
        isLodingGALLERY: false,
        isErrorGALLERY: false,
        imagesForGallerySlider: payload,
      };
    case GET_IMAGE_GALLERY_SLIDER_REQUEST:
      return {
        ...state,
        isLodingGALLERY: true,
        isErrorGALLERY: false,
      };

      case GET_REVIEW_SUCCSESS:
      return {
        ...state,
        revieswloading: false,
        reviews: payload,
      };
      case GET_REVIEW_REQUEST:
      return {
        ...state,
        revieswloading: false,
        
      };

      case GET_REVIEW_DELETE_SUCCSESS:
      return {
        ...state,
        revieswloading: false,
        
      };
      case GET_REVIEW_DELETE_REQUEST:
      return {
        ...state,
        revieswloading: true,
        
      };

    default:
      return state;
  }
};
