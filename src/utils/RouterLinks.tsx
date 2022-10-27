import { Routes, Route } from 'react-router-dom'
import { CreateLock } from '../pages/CreateLock';
import { Featured } from '../pages/explore/Featured';
import { MyLocks } from '../pages/explore/MyLocks';
import { Home } from '../pages/Home'
import { Lockpage } from '../pages/Lockpage';
import { NotFound } from '../pages/NotFound';

export const RouterLinks = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />

      <Route path={'*'} element={<NotFound />} />

      <Route path={'/explore'} element={<Lockpage />}>
        <Route path={'featured'} element={<Featured/>} />
        <Route path={'new'} element={<MyLocks/>} />
      </Route>

      <Route path={'/create/new'} element={<CreateLock/>}/>
    </Routes>
  );
}
