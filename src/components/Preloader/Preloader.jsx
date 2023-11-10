import loader from '/loading.gif';
import classes from './Preloader.module.scss';

const Preloader = () => {
  return (
    <span className={classes.preloader}>
      <img src={loader} alt='loading' />
    </span>
  );
};

export default Preloader;
