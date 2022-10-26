import { Routes, Route } from 'react-router-dom'
import { Featured } from '../pages/explore/featured';
import { NewLock } from '../pages/explore/NewLock';
import { Home } from '../pages/Home'
import { Lockpage } from '../pages/Lockpage';
import { NotFound } from '../pages/NotFound';

export const RouterLinks = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<NotFound />} />

      <Route path='/explore' element={<Lockpage />}>
        <Route path='featured' element={<Featured/>} />
        <Route path='new' element={<NewLock/>} />
      </Route>
    </Routes>
  );
}
