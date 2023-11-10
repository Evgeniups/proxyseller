import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {API_URL} from '../../../variables.js';

import LeftNav from '../../LeftNav/LeftNav.jsx';
import Preloader from '../../Preloader/Preloader.jsx';
import AlbumItem from '../AlbumItem/AlbumItem.jsx';

import cn from 'classnames';
import classes from './AlbumList.module.scss';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  const [inputValue, setInputValue] = useState('');

  const [sort, setSort] = useState(false);

  const url = id ? `${API_URL}albums?userId=${id}` : `${API_URL}albums`;

  async function getData() {
    setIsLoading(true);
    const req = await fetch(url);
    const res = await req.json();
    setAlbums(res);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  const sortAsc = (a, b) => (a.title > b.title ? 1 : -1);
  const sortDesc = (a, b) => (a.title < b.title ? 1 : -1);

  const filteredAlbums = () =>
    albums.filter(album => {
      return album.title.toLowerCase().includes(inputValue.toLowerCase());
    });

  if (isLoading) return <Preloader />;
  return (
    <>
      <div className='filter-sort'>
        <input className='search' value={inputValue} type='search' onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => setSort(!sort)}>{sort ? 'Sort ASC' : 'Sort DESC'}</button>
      </div>
      <div className={cn(classes.albums, 'grid')}>
        {filteredAlbums()
          .sort(sort ? sortDesc : sortAsc)
          .map(item => (
            <AlbumItem key={item.id} {...item} />
          ))}
      </div>
      <LeftNav withoutBack />
    </>
  );
};

export default AlbumList;
