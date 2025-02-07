import zysk_logo from '../images/zysk-logo.png'

function Footer() {
    return (
        <div className="container footer mt-4">
        <div className="row">
            <div className="col-lg-6 col-12"><img src={zysk_logo} className="footer-img" alt=""/></div>
            <div className="col-lg-6 col-12 footer-copy-right"><span>&#64; 2077 zysktechnologies. All rights reserved.</span></div>
        </div>
    </div>
    );
  }
  
  export default Footer;