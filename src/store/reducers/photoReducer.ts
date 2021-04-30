import {PhotosAction, PhotosActionTypes, PhotosState} from "../../types/photo";

const initialState: PhotosState = {
    photos: [],
    loading: false,
    error: null,
    album: 1,
}


export const photoReduser = (state: PhotosState = initialState, action: PhotosAction): PhotosState => {
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS:
            return {...state, loading: true};
        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload};
        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload};
        case PhotosActionTypes.SET_ALBUM:
            return {...state, album: action.payload};
        default:
            return state;
    }
}