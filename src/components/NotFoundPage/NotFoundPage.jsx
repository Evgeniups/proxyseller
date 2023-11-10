import {NavLink} from 'react-router-dom';

import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <>
      <div className={classes['not-found']}>
        <div className={classes.title}>Page not found</div>
        <NavLink className={classes.btn} to='/'>
          Back to home
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundPage;
