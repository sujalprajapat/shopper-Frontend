import c1 from "../Image/c1.png"
import c2 from "../Image/c2.png"
import c3 from "../Image/c3.png"
import c4 from "../Image/c4.png"
import c5 from "../Image/c5.png"
import c6 from "../Image/c6.png"
import c7 from "../Image/c7.png"
import c8 from "../Image/c8.png"
import c9 from "../Image/c9.png"
import c10 from "../Image/c10.png"
import c11 from "../Image/c11.png"
import c12 from "../Image/c12.png"
import b1 from '../Image/B1.webp';
import b2 from '../Image/B2.png';
import b3 from '../Image/B3.jpg';
import b4 from '../Image/B4.jpg';
import b5 from '../Image/B5.jpg';
import b6 from '../Image/B6.png';
import b7 from '../Image/B7.svg';
import b8 from '../Image/B8.jpg';
import b9 from '../Image/B9.jpg';
import b10 from '../Image/B10.png';
import b11 from '../Image/B11.png';
import b12 from '../Image/B12.jpg';
import { Link } from "react-router-dom";
// import { link } from "../app/CounterSlice";
function Brand() {
    // var url ="http://localhost:5000/";
    return (
        <div className="brands">
            <div className="head space">
                <h1 className="heading"> / CATEGORY / </h1>
            </div>
            <div className="cat sp_container">
                <div className="row row-cols-lg-4 row-cols-2 row-cols-md-3 gx-0 align-items-center">
                    <div className="col">
                        <Link to={"category/category/lcd with touch screen"}>
                            <div className="catimg">
                                <img src={c1} alt=" not available" ></img>
                            </div>
                            <h4>Chelsea Boots</h4>
                        </Link>
                    </div>

                    <div className="col" >
                        <Link to={"category/category/touch screen"} >
                            <div className="catimg">
                                <img src={c2} alt="not available"></img>
                            </div>
                            <h4>Chukka Boots</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/lcd screen"} >
                            <div className="catimg">
                                <img src={c3} alt="not available"></img>
                            </div>
                            <h4>Loafers</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/volume button"} >
                            <div className="catimg">
                                <img src={c4} alt="not available"></img>
                            </div>
                            <h4>Oxford Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/battery"} >
                            <div className="catimg">
                                <img src={c5} alt="not available"></img>
                            </div>
                            <h4>Derby Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/back camera"} >
                            <div className="catimg">
                                <img src={c6} alt="not available"></img>
                            </div>
                            <h4>Boat Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/front camera"} >
                            <div className="catimg">
                                <img src={c7} alt="not available"></img>
                            </div>
                            <h4>Brogues Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/sim connector"} >
                            <div className="catimg">
                                <img src={c8} alt="not available"></img>
                            </div>
                            <h4>Slip-On Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/charging connector"} >
                            <div className="catimg">
                                <img src={c9} alt="not available"></img>
                            </div>
                            <h4>Sneakers</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/power button flex cable"} >
                            <div className="catimg">
                                <img src={c10} alt="not available"></img>
                            </div>
                            <h4>Monk Strap Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/ear speaker"} >
                            <div className="catimg">
                                <img src={c11} alt="not available"></img>
                            </div>
                            <h4>Leather Shoes</h4>
                        </Link>
                    </div>
                    <div className="col" >
                        <Link to={"category/category/front glass"} >
                            <div className="catimg">
                                <img src={c12} alt="not available"></img>
                            </div>
                            <h4>Moccasins</h4>
                        </Link>

                    </div>
                </div>
            </div >
             <div>
             <div className="head space">
                <h1 className="heading">BRANDS</h1>
             </div>
             <div className="sp_container">
             <div className="brand row row-cols-lg-3 row-cols-md-2 row-cols-2  gx-0 align-items-center">
                <div className="col" >
                    <Link to={"category/brand/apple"} >
                        <img src={b1} alt="not available"></img>
                    </Link>
                </div>
                <div className="col"  >
                    <Link to={"category/brand/oppo%20"} >
                        <img src={b2} alt="not available"></img>
                    </Link>
                </div>
                <div className="col" >
                    <Link to={"category/brand/vivo"} >
                        <img src={b3} alt="not available"></img>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"category/brand/google"} >
                        <img src={b4} alt="not available"></img>
                    </Link>
                </div>
                <div className="col" >
                    <Link to={"category/brand/xiaomi"} >
                        <img src={b5} alt="not available"></img>
                    </Link>
                </div>
                <div className="col"  >
                    <Link to={"category/brand/realme"} >
                        <img src={b6} alt="not available"></img>
                    </Link>
                </div>
                <div className="col" >
                    <Link to={"category/brand/oneplus"} >
                        <img src={b7} alt="not available"></img>
                    </Link>
                </div>
                <div className="col align-self-center"  >
                    <Link to={"category/brand/samsung"} >
                        <img src={b8} alt="not available"></img>
                    </Link>
                </div>
                <div className="col"  >
                    <Link to={"category/brand/iqoo"} >
                        <img src={b9} alt="not available"></img>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"category/brand/motorola"}>
                        <img src={b10} alt="not available"  ></img>
                    </Link>
                </div>
                <div className="col"  >
                    <Link to={"category/brand/lava"}>
                        <img src={b11} alt="not available"></img>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"category/brand/lenovo"}>
                        <img src={b12} alt="not available"></img>
                    </Link>
                </div>
             </div>
             </div>
             </div>
             {/* <Axion></Axion> */}
        </div >
    )
}
export default Brand;