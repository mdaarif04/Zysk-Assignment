import ux_Review from '../images/ux-review.png'
import migrating from '../images/migrating.png'
import building from '../images/building.png'

import left from '../images/content-profile-img-left.png'
import center from '../images/content-profile-img-center.png'
import right from '../images/content-profile-img-right.png'


function Main7() {
  return (
    <div className="container mt-5 p-0 content-div-7">

    <div className="row md-4">
        <div className="col-10">
            <span className="content-div-7-top mt-3">Our blog</span>
            <h3 className="content-div-7-mid mt-3">Lastest blog posts</h3>
            <span className="content-div-7-down mt-3">Tool and strategies modern teams need to help their companies
                grow.</span>
        </div>
   
        <div className="col-2 mb-3 text-center d-none d-lg-block">
            <button className="btn content-div-7-btn">View all posts</button>
        </div>



    </div>
    <div className="row mt-4">

       
        <div className="col-lg-4 col-12 mb-3">
            <div className="card">
                <img src={ux_Review} className="content-div-7-card-img-top" alt=""/>
                <div className="card-body content-div-7-card-body-div">
                    <h6 className="content-div-7-card-title">Design</h6>
                    <div className="row">
                        <div className="col-11">
                            <h4>UX review presentations</h4>
                        </div>
                        <div className="col-1"><img src="top-arrow.png" className="content-div-7-card-img-arrow" alt=""/>
                        </div>
                    </div>
                    <p className="content-div-7-card-text">This is some description text for card 1. Add more
                        details here.</p>
                </div>
                <div className="row content-div-7-card-div2">
                    <div className="col-4"><img src={left}
                            className="content-div-7-card-img-profile" alt=""/></div>
                    <div className="col-8 row content-div-7-card-div2-text-div">
                        <h5 className="content-div-7-card-h5">Olivia Rhye</h5>
                        <span className="content-div-7-card-span">20 Jan 2024</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col-lg-4 col-12 mb-3">
            <div className="card">
                <img src={migrating} className="content-div-7-card-img-top" alt=""/>
                <div className="card-body content-div-7-card-body-div">
                    <h6 className="content-div-7-card-title">Product</h6>
                    <div className="row">
                        <div className="col-11">
                            <h4>Migrating to Linear 101</h4>
                        </div>
                        <div className="col-1"><img src="top-arrow.png" className="content-div-7-card-img-arrow" alt=""/>
                        </div>
                    </div>
                    <p className="content-div-7-card-text">Linear helps streamline software projects, sprints,
                        tasks, and bug tracking. Here’s how to get started.</p>
                </div>
                <div className="row content-div-7-card-div2">
                    <div className="col-4"><img src={center}
                            className="content-div-7-card-img-profile" alt=""/></div>
                    <div className="col-8 row content-div-7-card-div2-text-div">
                        <h5 className="content-div-7-card-h5">Phoenix Baker</h5>
                        <span className="content-div-7-card-span">19 Jan 2024</span>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="col-lg-4 col-12 mb-3">
            <div className="card">
                <img src={building} className="content-div-7-card-img-top" alt=""/>
                <div className="card-body content-div-7-card-body-div">
                    <h6 className="content-div-7-card-title">Software Engineering</h6>
                    <div className="row">
                        <div className="col-11">
                            <h4>Building your API stack</h4>
                        </div>
                        <div className="col-1"><img src="top-arrow.png" className="content-div-7-card-img-arrow" alt=""/>
                        </div>
                    </div>
                    <p className="content-div-7-card-text">The rise of RESTful APIs has been met by a rise in tools
                        for creating, testing, and managing them.</p>
                </div>
                <div className="row content-div-7-card-div2">
                    <div className="col-4"><img src={right}
                            className="content-div-7-card-img-profile" alt=""/></div>
                    <div className="col-8 row content-div-7-card-div2-text-div">
                        <h5 className="content-div-7-card-h5">Lana Steiner</h5>
                        <span className="content-div-7-card-span">18 Jan 2024</span>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <div className="col-12 mt-3 text-center me-auto d-lg-none">
        <button className="btn  custom-button content-div-7-btn content-div-7-mobile">View all posts</button>
    </div>
</div>
  );
}

export default Main7;