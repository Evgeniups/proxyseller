import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL} from '../../../variables.js';

import cn from 'classnames';

import LeftNav from '../../LeftNav/LeftNav.jsx';
import Preloader from '../../Preloader/Preloader.jsx';
import PostItem from '../PostItem/PostItem.jsx';
import classes from './PostList.module.scss';

const PostList = () => {
  const [userPosts, setUserPosts] = useState([]);
  const {id} = useParams();
  const [inputValue, setInputValue] = useState('');
  const [sort, setSort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = id ? `${API_URL}posts?userId=${id}` : `${API_URL}posts`;

  async function getPosts() {
    setIsLoading(true);
    const req = await fetch(url);
    const res = await req.json();
    setUserPosts(res);
    setIsLoading(false);
  }

  const sortAsc = (a, b) => (a.title > b.title ? 1 : -1);
  const sortDesc = (a, b) => (a.title < b.title ? 1 : -1);

  const filterePosts = () =>
    userPosts.filter(user => {
      return user.title.toLowerCase().includes(inputValue.toLowerCase());
    });
  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) return <Preloader />;
  return (
    <>
      <div className='filter-sort'>
        <input className='search' value={inputValue} type='search' onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => setSort(!sort)}>{sort ? 'Sort ASC' : 'Sort DESC'}</button>
      </div>
      <div className={cn(classes.posts, 'grid')}>
        {filterePosts()
          .sort(sort ? sortDesc : sortAsc)
          .map(item => (
            <PostItem key={item.id} {...item} />
          ))}
      </div>
      <LeftNav withoutBack />
    </>
  );
};

export default PostList;
