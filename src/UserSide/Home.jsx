import Brand from "./Component/Brand";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Slider from "./Component/Slider";
import SubMenu from "./Component/SubMenu";

function Home() {
    return (
        <>
            <Header/>
            <SubMenu/>
            <Slider/>
            <Brand/>
            <Footer/>
        </>
    );
}
export default Home