import cn from 'classnames';
import classes from './PostItem.module.scss';

const PostItem = ({title, body}) => {
  return (
    <>
      <div className={cn(classes.post, 'card')}>
        <div className={classes.title}>{title}</div>
        <div className={classes.body}>{body}</div>
      </div>
    </>
  );
};

export default PostItem;
