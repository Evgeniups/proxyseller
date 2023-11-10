import {NavLink} from 'react-router-dom';

import cn from 'classnames';
import classes from './AlbumItem.module.scss';

const AlbumItem = ({title, id}) => {
  return (
    <NavLink className={classes['btn']} to={`/photos/${id}`}>
      <div className={cn(classes.album, 'card')}>
        <div className={classes.title}>{title}</div>
      </div>
    </NavLink>
  );
};

export default AlbumItem;
