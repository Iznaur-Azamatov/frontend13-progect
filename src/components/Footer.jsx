import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import Massages from "./Massages";

function Footer() {
    return(
       <div className="container">
            <div className="Footer">
            <FooterLogo/>
            <Massages/>
            <Copyright/>
            </div>
       </div> 
        
    );
}
export default  Footer;