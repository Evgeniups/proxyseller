import {NavLink, useNavigate} from 'react-router-dom';

import classes from './LeftNav.module.scss';

const LeftNav = ({withoutBack = false}) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes['left-nav']}>
      <NavLink className={classes['home-btn']} to='/'>
        <svg width='24' height='24' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.35355 1.14645C8.15829 0.951184 7.84171 0.951184 7.64645 1.14645L1.64645 7.14645C1.55268 7.24021 1.5 7.36739 1.5 7.5V14.5C1.5 14.7761 1.72386 15 2 15H6.5C6.77614 15 7 14.7761 7 14.5V10.5H9V14.5C9 14.7761 9.22386 15 9.5 15H14C14.2761 15 14.5 14.7761 14.5 14.5V7.5C14.5 7.36739 14.4473 7.24021 14.3536 7.14645L13 5.79289V2.5C13 2.22386 12.7761 2 12.5 2H11.5C11.2239 2 11 2.22386 11 2.5V3.79289L8.35355 1.14645ZM2.5 14V7.70711L8 2.20711L13.5 7.70711V14H10V10C10 9.72386 9.77614 9.5 9.5 9.5H6.5C6.22386 9.5 6 9.72386 6 10V14H2.5Z'
            fill='white'
          />
        </svg>
      </NavLink>
      {withoutBack || (
        <button className={classes['back-btn']} onClick={goBack}>
          <svg width='24' height='24' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15 8C15 7.72386 14.7761 7.5 14.5 7.5L2.70711 7.5L5.85355 4.35355C6.04882 4.15829 6.04882 3.84171 5.85355 3.64645C5.65829 3.45118 5.34171 3.45118 5.14645 3.64645L1.14645 7.64645C0.951184 7.84171 0.951184 8.15829 1.14645 8.35355L5.14645 12.3536C5.34171 12.5488 5.65829 12.5488 5.85355 12.3536C6.04882 12.1583 6.04882 11.8417 5.85355 11.6464L2.70711 8.5H14.5C14.7761 8.5 15 8.27614 15 8Z'
              fill='white'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default LeftNav;
