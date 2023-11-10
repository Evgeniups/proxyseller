import {NavLink, Outlet} from 'react-router-dom';

import classes from './Layout.module.scss';

const setActive = ({isActive}) => (isActive ? 'active-link' : '');

const Layout = () => {
  return (
    <>
      <header className={classes.header}>
        <NavLink to='/' className={setActive} title='All users'>
          Users
        </NavLink>
        <NavLink to='/posts' className={setActive} title='All posts'>
          Posts
        </NavLink>
        <NavLink to='/albums' className={setActive} title='All albums'>
          Albums
        </NavLink>
        <NavLink to='/photos' className={setActive} title='first 100 items'>
          Photos
        </NavLink>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>© {new Date().getFullYear()} - Evgeniups. All rights reserved</footer>
    </>
  );
};

export default Layout;
