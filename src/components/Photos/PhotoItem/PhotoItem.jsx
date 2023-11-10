import {NavLink} from 'react-router-dom';

import cn from 'classnames';
import classes from './PhotoItem.module.scss';

const PhotoItem = ({id, title, thumbnailUrl}) => {
  return (
    <>
      <div key={id} className={cn(classes.photo, 'card')}>
        <div className={classes.title}> {title}</div>
        <NavLink to={`/preview/${id}`}>
          <img className={classes.image} src={thumbnailUrl} alt={title} />
        </NavLink>
      </div>
    </>
  );
};

export default PhotoItem;
