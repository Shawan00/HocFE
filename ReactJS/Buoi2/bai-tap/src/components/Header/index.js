import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


function Header() {
    return (
        <header>
            <div class="header-top">Due to the COVID 19 epidemic, orders may be
                processed with a slight delay</div>
            <div class="inner-wrap width-content">
                <div class="inner-logo">
                    <a href="#">
                        <img src="https://mobirise.com/extensions/curem4/mask-store/assets/images/logo.png"></img>
                    </a>
                    <a href="#"><span>CureM4</span></a>
                </div>
                <div class="inner-menu">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="inner-contact">
                    <span>Need help? 989-879-0847</span>
                </div>
                <div class="inner-social">
                    <ul>
                        <li>
                            <a href="#"><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href="#"><FaTwitter/></a>
                        </li>
                        <li>
                            <a href="#"><FaInstagram/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header