import './App.css';
import ProductReducer from './components/ProductReducer';
import UseReducer from './components/UseReducer';

function App() {
  return (
    <>
      {/* UseReducer: tương tự UseState, dùng khi component có State phức tạp */}
      <UseReducer/>
      
      {/* Skeleton: giao diện loading */}
      <ProductReducer/>
    </>
  );
}

export default App;
