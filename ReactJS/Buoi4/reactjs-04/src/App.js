import { createContext } from 'react';
import './App.css';
import UseEffect1 from './components/UseEffect1';
import UseEffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import Header from './components/Header';

export const menuContext = createContext();
function App() {
  const menu = [
    "Trang chủ",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ"
  ];

  return (
    <>
      {/* useEffect dùng để xử lý logic sau khi dữ liệu thay đổi */}
      {/* không truyền dependency */}
      <UseEffect1/>

      {/* call API: truyền dependency rỗng */}
      {/* <UseEffect2/> */}

      {/* pagination: useEffect có truyền dependency */}
      <UseEffect3/>

      {/* useContext */}
      <menuContext.Provider value={menu}>
        <Header/>
      </menuContext.Provider>
    </>
  );
}

export default App;
