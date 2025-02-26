import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Erorr404 from './pages/Erorr404';
import LayoutDefault from './pages/layout/LayoutDefault';
import Blog from './pages/Blog';
import BlogNews from './pages/Blog/BlogNews';
import BlogRelated from './pages/Blog/BlogRelated';
import BlogDefault from './pages/Blog/BlogDefault';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <>
      {/* Chuyển trang với link */}
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          {/* Mở trang Home:  http://localhost:3000/*/}
          <Route path='/' element={<Home />} />
          {/* Mở trang Contact: http://localhost:3000/contact */}
          <Route path='contact' element={<Contact />} />
          {/* Nếu link đến một trang không tồn tại => điều hướng sang trang erorr 404 */}
          <Route path='*' element={<Erorr404 />} />

          <Route path='blog' element={<Blog />}>
            {/* Nếu truy cập đến /blog thì sẽ hiển thị component này */}
            <Route index element={<BlogDefault/>}/>

            {/* Truy cập đến bằng link http://localhost:3000/blog/news */}
            <Route path='news' element={<BlogNews />} />

            {/* Truy cập đến bằng link http://localhost:3000/blog/related */}
            <Route path='related' element={<BlogRelated />} />
          </Route>
        </Route>

      </Routes>

      <h2>UseRoute:</h2>
      <AllRoutes/>
    </>
  );
}

export default App;
