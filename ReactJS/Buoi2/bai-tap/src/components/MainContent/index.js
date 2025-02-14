import { FaEarthAmericas } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";


function MainContent() {
    return (
        <>
            <div class="section-1">
            <div class="content width-content">
                <div class="title">
                    <h1>
                        <strong>Antivirus <br></br>
                            Mask Store</strong>
                    </h1>
                    <p>The easiest way to protect yourself</p>
                    <div class="icon">
                        <div class="shield">
                            <FaShieldAlt/>
                            <span>Anti-Bacterial</span>
                        </div>
                        <div class="global">
                            <FaEarthAmericas />
                            <span>Anti-Virus</span>
                        </div>
                    </div>
                    <a href="#">Shop now</a>
                </div>
                <div class="image">
                    <div class="price-wrapper">
                        <h5>only</h5><br></br>
                        <h4>$25</h4>
                    </div>
                    <img src="https://mobirise.com/extensions/curem4/mask-store/assets/images/product1.jpg"></img>
                </div>
            </div>
        </div>

        <div class="section-2">
            <div class="content width-content">
                <div class="image-wraper image-1">
                    <div class="text-wrapper text-1">
                        <strong>NEW</strong>
                        <h4>Antivirus <br></br> Mask</h4>
                        <a href="#">More</a>
                    </div>
                    <img
                        src="https://mobirise.com/extensions/curem4/mask-store/assets/images/mbr.jpeg"
                        alt></img>
                </div>
                <div class="image-wraper image-2">
                    <div class="text-wrapper text-2">
                        <h4>Basic <br></br> Mask</h4>
                        <strong>-30%</strong>
                        <a href="#">Shop now</a>
                    </div>
                    <img
                        src="https://mobirise.com/extensions/curem4/mask-store/assets/images/card1.jpg"
                        alt></img>
                </div>
                <div class="image-wraper image-3">
                    <div class="text-wrapper text-3">
                        <h4>Medical Mask</h4>
                        <strong>$15.99</strong>
                        <del>$29.99</del>
                        <a href="#">Buy now</a>
                    </div>
                    <img
                        src="https://mobirise.com/extensions/curem4/mask-store/assets/images/mbr-3.jpg"
                        alt></img>
                </div>
            </div>
        </div>

        <div class="section-3">
            <div class="width-content">
                <div class="text">
                    <h3>Effective and reliable <br></br>
                        protection for your
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="slogan">
                    <div class="item slogan-1">
                        <div class="text-wrapper">
                            <i class="fa-solid fa-earth-americas"></i>
                            <h4>Anti-Virus</h4>
                            <p>Lorem ipsum dolor sit amet, <br></br> consectetur
                                adipiscing.
                            </p>
                        </div>
                    </div>
                    <div class="item slogan-2">
                        <div class="text-wrapper">
                            <i class="fa-regular fa-sun"></i>
                            <h4>Anti-Bacterial</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br>consectetur
                                adipiscing.</p>
                        </div>
                    </div>
                    <div class="item slogan-3">
                        <div class="text-wrapper">
                            <i class="fa-solid fa-shield-halved"></i>
                            <h4>Safety</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br>consectetur
                                adipiscing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-4">
            <div class="content width-content">
                <div class="text-wrapper">
                    <h3>
                        Effective &
                        reliable
                        protection
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit.</p>
                    <a href="#">About</a>
                </div>
                <div class="image-wrapper">
                    <img src="https://mobirise.com/extensions/curem4/mask-store/assets/images/features1.jpg" alt=""></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainContent