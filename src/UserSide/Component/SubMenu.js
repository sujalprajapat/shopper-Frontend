import { Link } from 'react-router-dom';
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
function SubMenu(){
    return(
        <div  style={{background:"black"}} className='sub_nav'>
            <div className='sp_container'>
                <div className='sp_overflowx'>
                <ul className='menu_item d-flex  justify-content-center ps-0 mb-0'>
                <li className='py-2 px-4'><Link to=''>BRAND</Link>
                    <ul className='item_megamenu row d-flex flex-wrap row gx-0 align-items-center'>
                     <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b1} className='brand_img' alt="Apple"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to='' >
                            <img src={b2} className='brand_img' alt="Oppo"></img>
                        </Link>
                    </li>
                    <li className=' col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b3} className='brand_img' alt="Vivo"></img>
                        </Link>
                    </li>
                    <li className=' col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b4} className='brand_img' alt="Google"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b5} className='brand_img' alt="Xiami"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b6} className='brand_img' alt="Realme"></img>
                        </Link>
                    </li> 
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b7} className='brand_img' alt="Oneplus"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b8} className='brand_img' alt="Samsung"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b9} className='brand_img' alt="Iqoo"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b10} className='brand_img' alt="Motorola"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b11} className='brand_img' alt="Lava"></img>
                        </Link>
                    </li>
                    <li className='col-6 col-sm-4 col-lg-3 col-xl-2' onClick={()=>{}}>
                        <Link to=''>
                            <img src={b12} className='brand_img' alt="Lenovo"></img>
                        </Link>
                    </li>
                </ul>
                </li>
                <li className='py-2 px-4 position-relative'><Link to=''>CATEGORY</Link>
                <ul className='item_submenu'>
                    <li onClick={()=>{}}><Link to="">Chelsea Boots</Link></li>
                    <li onClick={()=>{}}><Link to=''>Chukka Boots</Link></li>
                    <li onClick={()=>{}}><Link to=''>Loafers</Link></li>
                    <li onClick={()=>{}}><Link to=''>Oxford Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Derby Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Boat Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Brogues Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Slip-On Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Sneakers</Link></li>
                    <li onClick={()=>{}}><Link to=''>Monk Strap Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Leather Shoes</Link></li>
                    <li onClick={()=>{}}><Link to=''>Moccasins</Link></li>
                </ul>
                </li>
                <li className='py-2 px-4 position-relative'><Link to=''>COLOURS</Link>
                <ul className='item_submenu'>
                    <li onClick={()=>{}}><Link to=''>Black</Link></li>
                    <li onClick={()=>{}}><Link to=''>White</Link></li>
                    <li onClick={()=>{}}><Link to=''>Pink</Link></li>
                    <li onClick={()=>{}}><Link to=''>Orange</Link></li>
                    <li onClick={()=>{}}><Link to=''>Silver</Link></li>
                    <li onClick={()=>{}}><Link to=''>Blue</Link></li>
                    <li onClick={()=>{}}><Link to='category'>Brown</Link></li>
                    <li onClick={()=>{}}><Link to=''>Gold</Link></li>
                </ul>
                </li>
                <li className='py-2 px-4 position-relative'><Link to=''>SIZE</Link>
                <ul className='item_submenu'>
                    <li onClick={()=>{}}><Link to=''>6 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>7 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>7.5 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>8 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>8.5 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>9 (US)</Link></li> 
                    <li onClick={()=>{}}><Link to=''>9.5 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>10 (US)</Link></li>
                    <li onClick={()=>{}}><Link to=''>11 (US)</Link></li> 
                    <li onClick={()=>{}}><Link to=''>5 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>5.5 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>6 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>6.5 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>7 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>7.5 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>8 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>9 (Uk)</Link></li>
                    <li onClick={()=>{}}><Link to=''>23.5 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>24.4 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>24.8 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>25.4 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>25.7 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>26 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>26.7 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>27 cm</Link></li>
                    <li onClick={()=>{}}><Link to=''>27.9 cm</Link></li>
                </ul>
                </li>
                <li className='py-2 ps-2 pe-0' onClick={()=>{}}><Link to=''>LATEST</Link></li>
            </ul>
                </div>
            </div>

        {/* <Axion></Axion> */}
    </div>
    )
}
export default SubMenu;