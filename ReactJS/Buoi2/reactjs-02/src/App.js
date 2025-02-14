import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigatonMenu from './components/NavigationMenu';
import Content from './components/Content';
import MainContent from './components/MainContent';
import { AiFillAudio, AiFillCar } from "react-icons/ai"; //thêm thư viện của icon


function App() {
  let name = "Việt"
  let css = {
    color: "red",
    backgroundColor: "green"
  }

  const handleClick = (e) => {
    console.log(e.target);
  }
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    //Cú pháp jsx
    // thẻ fragment: bị loại bỏ khi render ra file index.html
    <>      
      <div className="test" style={css}>
        Hello {name}
      </div>
      <div className="test" style={css}>
        Xin chào {name}
      </div>


      {/* Component */}
      <Header /> 
      <NavigatonMenu />
      <div className="main">
        <Content text="Content 1" string="123" />
        <MainContent />
        <Content text="Content 2"/>
      </div>
      <Footer />     


      {/* icon */}
      <div className='icon'>
          <AiFillAudio />
          <AiFillCar />
      </div>

      {/* Event */}
      <button type='button' onClick={handleClick}>Btn click</button>
      <input type='text' onChange={handleChange} placeholder='Nhập bất kỳ'></input>
    </>

  );
}

export default App;
