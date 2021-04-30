export interface PhotosState {
    photos: any[];
    loading: boolean;
    error: null | string;
    album: number;
}

export enum PhotosActionTypes {
    FETCH_PHOTOS =  "FETCH_PHOTOS",
    FETCH_PHOTOS_SUCCESS =  "FETCH_PHOTOS_SUCCESS",
    FETCH_PHOTOS_ERROR =  "FETCH_PHOTOS_ERROR",
    SET_ALBUM =  "SET_ALBUM",
}

interface FetchPhotosAction {
    type: PhotosActionTypes.FETCH_PHOTOS
}
interface FetchPhotosSuccessAction {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
    payload: any[];
}
interface FetchPhotosErrorAction {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
    payload: string;
}
interface SetPhotosPageAction {
    type: PhotosActionTypes.SET_ALBUM,
    payload: number,
}

export type PhotosAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction | SetPhotosPageAction;