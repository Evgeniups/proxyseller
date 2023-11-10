import {useEffect, useState} from 'react';
import {API_URL} from '../../../variables.js';

import Preloader from '../../Preloader/Preloader.jsx';
import User from '../UserItem/User.jsx';
import cn from 'classnames';
import classes from './UsersList.module.scss';

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [sort, setSort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getUserList() {
    setIsLoading(true);
    const req = await fetch(API_URL + 'users');
    const res = await req.json();
    setUserList(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getUserList();
  }, []);

  const sortAsc = (a, b) => (a.username > b.username ? 1 : -1);
  const sortDesc = (a, b) => (a.username < b.username ? 1 : -1);

  const filteredUsers = () =>
    userList.filter(user => {
      return user.username.toLowerCase().includes(inputValue.toLowerCase());
    });

  if (isLoading) return <Preloader />;
  return (
    <>
      <div className='filter-sort'>
        <input className='search' value={inputValue} type='search' onChange={e => setInputValue(e.target.value)} />
        <button onClick={() => setSort(!sort)}>{sort ? 'Sort ASC' : 'Sort DESC'}</button>
      </div>
      <div className={cn(classes.users, 'grid')}>
        {filteredUsers()
          .sort(sort ? sortDesc : sortAsc)
          .map(user => (
            <User key={user.id} {...user} />
          ))}
      </div>
    </>
  );
};

export default UsersList;
