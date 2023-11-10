import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL} from '../../../variables.js';

import LeftNav from '../../LeftNav/LeftNav.jsx';
import Preloader from '../../Preloader/Preloader.jsx';
import PhotoItem from '../PhotoItem/PhotoItem.jsx';

const PhotoList = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [inputValue, setInputValue] = useState('');

  const [sort, setSort] = useState(false);

  const {id} = useParams();

  const url = id ? `${API_URL}photos?albumId=${id}` : `${API_URL}photos?_limit=100`;

  async function getPhotos() {
    setIsLoading(true);
    const req = await fetch(url);
    const res = await req.json();
    setPhotosList(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  const sortAsc = (a, b) => (a.title > b.title ? 1 : -1);
  const sortDesc = (a, b) => (a.title < b.title ? 1 : -1);

  const filteredAlbums = () =>
    photosList.filter(album => {
      return album.title.toLowerCase().includes(inputValue.toLowerCase());
    });

  if (isLoading) return <Preloader />;
  return (
    <>
      <div className='filter-sort'>
        <input className='search' value={inputValue} type='search' onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => setSort(!sort)}>{sort ? 'Sort ASC' : 'Sort DESC'}</button>
      </div>
      <div className='grid'>
        {filteredAlbums()
          .sort(sort ? sortDesc : sortAsc)
          .map(item => {
            return <PhotoItem key={item.id} {...item} />;
          })}
      </div>

      <LeftNav withoutBack />
    </>
  );
};

export default PhotoList;
