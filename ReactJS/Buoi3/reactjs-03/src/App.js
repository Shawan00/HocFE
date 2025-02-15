import './App.css'; //nhúng file css
import Login from './components/Login';
import HomePage from './components/HomePage';
import Light from './components/Light';

function App() {
  // Conditional rendering
  var isLogin = true;
  var needVerify = true;
  var arrMenu = ["Trang chủ", "Sản phẩm", "Giới thiệu", "Liên hệ"]
  return isLogin ? (
    <>
      {/* isLogin = true sẽ chạy vào nhánh này */}
      <HomePage />

      {/* nếu needVerify = true thì dòng này được render */}
      {needVerify && <div>Cần xác minh thông tin</div>}

      {/* List */}
      {/* In các phần tử trong arrMenu ra giao diện */}
      <ul className='menu'>
        {arrMenu.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      {/* css/scss => components/HomePage */}

      {/* useState: => components/Light
      Giúp cập nhật giao diện khi dữ liệu thay đổi mà không cần reload lại trang       */}
      <Light/>
    </>
  ) : (
    <>
      {/* isLogin = false sẽ chạy vào nhánh này */}
      <Login />
    </>
  );
}

export default App;
