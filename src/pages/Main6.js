import left from '../images/content-profile-img-left.png'
import right from '../images/content-profile-img-right.png'
import center from '../images/content-profile-img-center.png'

function Main6() {
    return (
        <div className="container content-div-6 mt-4">
        <div className="row content-div-6-row1">
            <img src={left} className="content-profile-img-left" alt=""/>
            <img src={right} className="content-profile-img-right" alt=""/>
            <img src={center} className="content-profile-img-center" alt=""/>
        </div>
        <div className="row mt-4">
            <div className="row content-div-6-row1-details">
                <h5>Still have questions?</h5>
            </div>
            <div className="row content-div-6-row1-details"><span>Can’t find the answer you’re looking for? Please chat
                    to our friendly team.</span></div>
        </div>
        <div className="row mt-4">
            <button className="btn content-div-6-btn">Get in touch</button>
        </div>
    </div>
    );
  }
  
  export default Main6;