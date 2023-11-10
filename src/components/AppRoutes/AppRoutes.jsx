import {Route, Routes} from 'react-router-dom';
import Layout from '../Layout/Layout';
import UsersList from '../Users/UsersList/UsersList';
import PostList from '../Posts/PostList/PostList';
import AlbumList from '../Albums/AlbumList/AlbumList';
import PhotoList from '../Photos/PhotoList/PhotoList';
import Preview from '../Photos/Preview';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<UsersList />} />
        <Route path='posts' element={<PostList />} />
        <Route path='posts/:id' element={<PostList />} />
        <Route path='albums' element={<AlbumList />} />
        <Route path='albums/:id' element={<AlbumList />} />
        <Route path='photos' element={<PhotoList />} />
        <Route path='photos/:id' element={<PhotoList />} />
        <Route path='/preview/:id' element={<Preview />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
