import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import ToDo from './components/ToDo';

function App() {
  return (
    <>
      {/* Redux: lưu dữ liệu vào store để truyền giữa các components */}
      <Counter/>
      <Counter2/>

      {/* Ví dụ redux */}
      <ToDo/>
    </>
  );
}

export default App;
