import { Outlet,Link } from "react-router-dom"
import CoverImage from "./CoverImage";
import HeaderFreelancer from "./HeaderFreelancer"
import CardList from "./Cardlist"
import Button from "./Button"
import HeaderCustomer from "./HeaderCustomer"
import CustomerCardList from "./CustomerCardlist"
import Tutorialbutton from "./Tutorialbutton"
import Mail from "./Mail"
import Footer from "./Footer"
import FooterDevLinks from "./FooterDevLinks";

function Navigation()
{
 return(<div>
  <div className="topnav">
      <div className="logo">
        <img src={require("./Logo.png")} alt="logo" width={150} height={50} />
      </div>
      <div className="search-container text-center">
        <div className="text-center">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      
    <Link to= "/Post">
   Post
   </Link>
   <Link to= "/login">
   Login
   </Link>
   <Link to= "/signout">
   Sign Out
   </Link>
   </div>
    <CoverImage />
    <HeaderFreelancer />
    <CardList />
    <Button />
    <HeaderCustomer />
    <CustomerCardList />
    <Tutorialbutton />
    <Mail />
    <Footer />
    <FooterDevLinks />

 <Outlet />
 </div>)

}
export default Navigation