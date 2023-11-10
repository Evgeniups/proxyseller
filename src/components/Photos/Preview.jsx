import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL} from '../../variables.js';

import LeftNav from '../LeftNav/LeftNav.jsx';
import Preloader from '../Preloader/Preloader.jsx';

import classes from './Preview.module.scss';

const Preview = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState();
  const [photo, setPhoto] = useState([]);
  const [photoId, setPhotoId] = useState(id);

  async function getPhoto() {
    setIsLoading(true);
    const req = await fetch(API_URL + `photos?id=${photoId}`);
    const res = await req.json();
    setPhoto([...res]);
    setIsLoading(false);
  }

  useEffect(() => {
    getPhoto();
  }, []);

  if (isLoading) return <Preloader />;
  return (
    <div>
      {photo.map(item => {
        return (
          <div key={item.id} className={classes.photo}>
            <div className={classes.title}>{item.title}</div>
            <img className={classes.image} src={item.url} alt={item.title} />
          </div>
        );
      })}
      <LeftNav />
    </div>
  );
};

export default Preview;
