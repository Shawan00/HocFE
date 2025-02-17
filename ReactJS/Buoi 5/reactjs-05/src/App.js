import './App.css';
import ReactMemo from './components/ReactMemo';
import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';

function App() {
  return (
    <>
      {/* UseRef thay đổi dữ liệu mà không render lại giao diện */}
      <UseRef/>

      {/* React.memo không render lại components nếu nó không thay đổi */}
      <ReactMemo/>

      {/* UseCallback lưu vào bộ nhớ một hàm, giúp tránh thực hiện một hàm không cần thiết */}
      {/* const functionName = useCallback(callback, dependency) */}
      <UseCallback/>

      {/* UseMemo lưu vào bộ nhớ một giá trị, giúp tránh thực hiện lại một logic không cần thiết */}
      <UseMemo/>
    </>
  );
}

export default App;
