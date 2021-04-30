import {Dispatch} from "redux";
import axios from "axios";
import {PhotosAction, PhotosActionTypes} from "../../types/photo";

export const fetchPhotos = (album = 1 ) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS});
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album}`);
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: "Error"});
        }
    }
}

export const setAlbum = (album: number): PhotosAction => {
    return {type: PhotosActionTypes.SET_ALBUM, payload: album}
}