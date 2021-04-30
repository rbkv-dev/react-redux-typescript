import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PhotoList: React.FC = () => {
    const {album, error, loading, photos} = useTypedSelector(state => state.photo);
    const {fetchPhotos, setAlbum} = useActions();

    const albums = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchPhotos(album)
    }, [album])

    if (loading) {
        return <h1>Loading . . .</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {photos.map(photo =>
                    <div key={photo.id}>
                        <img style={{width: 50, height: 50}} src={photo.url} alt={`${photo.id} : ${photo.title}`} />
                    </div>
                )}
            </div>
            <div style={{display: "flex"}}>
                {albums.map(p =>
                    <div
                        style={{border: p === album ? "2px solid green" : "2px solid gray", padding: 10}}
                        onClick={() => setAlbum(p)}
                    >
                        {p}
                    </div>
                )}
            </div>
        </>
    );
};

export default PhotoList;