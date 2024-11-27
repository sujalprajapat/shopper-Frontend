import mylogo from '../Image/logo1.svg';
import { Link } from 'react-router-dom';
import f1 from '../Image/footer1.svg'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { RiWechat2Line } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <div className='footer'>
            <div className='sp_container'>
                <div className="footer d-flex justify-content-between align-items-center row ">
                    <div className='col-lg-4 col-md-12'>
                        <img src={mylogo} className='footer_logo ms-auto w-100' alt="Logo"></img>
                        {/* <h1>hellllo</h1> */}
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='d-flex justify-content-around'>
                            <ul className='footer_ul ps-0'>
                                <li>
                                    <Link>contact us</Link>
                                </li>
                                <li>
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link>Warranty detail</Link>
                                </li>
                                <li>
                                    <Link>policy</Link>
                                </li>
                                <li>
                                    <Link>term and condition</Link>
                                </li>
                                <li>
                                    <Link>help</Link>
                                </li>
                            </ul>
                            <div className='footerline'></div>
                            <ul className='footer_ul'>
                                <li>
                                    <Link to={'#'}>How to use</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>terms of use</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>security</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>payments</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>your account</Link>
                                </li>
                            </ul>

                        </div>
                        <div className='d-flex justify-content-center footericon'>
                                <a href='#1' >
                                    <CiFacebook></CiFacebook>
                                </a>
                                <a href='#2' >
                                    <FaInstagram></FaInstagram>
                                </a>
                                <a href='#3'>
                                    <FaWhatsapp></FaWhatsapp>
                                </a>
                                <a href='#4'>
                                    <CiYoutube></CiYoutube>
                                </a>
                                <a href='#5'>
                                    <RiWechat2Line></RiWechat2Line>
                                </a>
                                <a href='#6'>
                                    <FaTelegramPlane></FaTelegramPlane>
                                </a>
                                <a href='#7'>
                                    <FaSnapchatGhost></FaSnapchatGhost>

                                </a>
                                <a href='#8'>
                                    <FaXTwitter></FaXTwitter>
                                </a>
                            </div>
                    </div>
                    <div className='col-lg-4 col-md-6' style={{overflow:"hidden"}}>
                        <div className=''>
                        <h2 style={{ color: "white" }}>REVIEW US</h2>
                        <div className='d-flex justify-content-between align-items-center '>
                            <div className="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label htmlFor="star5" title="text"
                                ><svg
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="star-solid"
                                >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        ></path></svg
                                    ></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label htmlFor="star4" title="text"
                                ><svg
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="star-solid"
                                >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        ></path></svg
                                    ></label>
                                <input  type="radio" id="star3" name="rate" value="3" />
                                <label htmlFor="star3" title="text"
                                ><svg
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="star-solid"
                                >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        ></path></svg
                                    ></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label htmlFor="star2" title="text"
                                ><svg
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="star-solid"
                                >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        ></path></svg
                                    ></label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label htmlFor="star1" title="text"
                                ><svg
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="star-solid"
                                >
                                        <path
                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        ></path></svg
                                    ></label>
                            </div>
                            <button className="send ">send it..</button>
                        </div>
                      
                        </div>

                        <textarea className='textarea w-100' rows={6} cols={46} placeholder='Message.....'></textarea>
                        {/* <button>send</button> */}
                    </div>
                </div>
            </div>
            <div className='lastinfo  d-block d-md-flex justify-content-between row-cols-3 row-cols-md-3'>
                <div className='col col-12 d-flex justify-content-center justify-content-md-start'><p className='mb-0'>© 2022. All Rights Reserved.</p></div>
                <div className='col col-12 d-flex'><img src={f1} alt='not available'></img></div>
                <div className='col  col-12 d-flex justify-content-center justify-content-md-end'><p className='mb-0'>Powered by fikser.com</p></div>
                {/* <div><p></p></div> */}
            </div>

        </div>
    )
}
export default Footer