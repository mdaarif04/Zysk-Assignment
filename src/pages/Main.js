import profile from '../images/zysk-msg.png'

function Main() {
  return (

    <div className="container mt-4">

        <div className="main-content">
            <div className="row mb-4">
               
                <div className="col-12 mb-1 ">
                    <div className="">
                        <div className="p-2  new-feature-div first-div">
                            <h6 className="new-feature-outer">
                                <span className="new-feature-inner">New feature</span>
                                Check out the team dashboard
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </h6>
                        </div>
                        <div className="p-2 first-div">
                            <h1>Beautiful analytics to grow smarter</h1>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 mb-1 first-div">

                    <div className=" mb-2 details-div">Powerful, self-serve product and growth analytics
                        to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</div>
                </div>
            </div>

           
            <div className="row btn-container my-btn">
                <div className="col-6 mb-2 text-end btn-div">
                   
                    <button className="btn btn-mobile-full btn-main btn-one">
                        <i className="fa-regular fa-circle-play"></i> Demo
                    </button>
                </div>
                <div className="col-6 mb-2 btn-div">
                   
                    <button className="btn btn-mobile-full btn-main btn-two">Sign up</button>
                </div>
            </div>

           
            <div className="mt-4 main-div-msg">
                <img src={profile} alt=""/>
            </div>
        </div>
    </div>
  );
}

export default Main;
