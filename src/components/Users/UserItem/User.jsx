import {NavLink} from 'react-router-dom';

import cn from 'classnames';
import classes from './User.module.scss';

const User = props => {
  const {id, name, username, email, phone, website, address} = props;

  return (
    <div className={cn(classes.user, 'card')}>
      <div className={classes.header}>
        Username: <span>{username}</span>
      </div>
      <div className={classes.body}>
        <div className={classes.item}>
          Fullname: <span>{name}</span>
        </div>
        <div className={classes.item}>
          Email: <span>{email}</span>
        </div>
        <div className={classes.item}>
          City: <span>{address.city}</span>
        </div>
        <div className={classes.item}>
          Phone: <span>{phone}</span>
        </div>

        <div className={classes.item}>
          Website: <span>{website}</span>
        </div>
      </div>
      <div className={classes.footer}>
        <NavLink className={classes['btn']} to={`posts/${id}`}>
          Posts
        </NavLink>
        <NavLink className={classes['btn']} to={`albums/${id}`}>
          Albums
        </NavLink>
      </div>
    </div>
  );
};

export default User;
