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
  revieswloading: false,
  // img, name, review, _id, deletev
  reviews: [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Ashish",
      review:
        "Amazing experience from start to finish! The salon is clean, the staff is courteous, and I left feeling rejuvenated and beautiful. Thank you",
      _id: "124",
    },
    {
      img: "",
      name: "Kartik",
      review:
        "Absolutely loved my experience here! The staff is incredibly friendly and talented. My hair has never looked better. Highly recommend",
      _id: "125",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVR9V1Ix26V2s_WWWryH3FU5Qkl2yR4PL3BcUybf2cUw&s",
      name: "Naveen",
      review:
        "Absolutely loved my experience here! The staff is incredibly friendly and talented. My hair has never looked better. Highly recommend",
      _id: "126",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "Ankita",
      review:
        "Top-notch service and a relaxing atmosphere. The stylists really listen to what you want and deliver amazing results. ll definitely be back",
      _id: "127",
    },
  ],
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
