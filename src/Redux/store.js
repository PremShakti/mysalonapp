import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as headerrType } from "./headerManage/Reducer";
import { reducer as authReducer } from "./Authentication/Reducer";
import { reducer as getImages } from "./postreducer/Reducer";
import { reducer as getImagesForBannerSlider } from "./imagebannerslider/Reducer";
import { reducer as servicesReducer } from "./services/Reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    headerrType,
    authReducer,
    getImages,
    getImagesForBannerSlider,
    servicesReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


