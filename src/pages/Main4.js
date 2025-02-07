import sisphus from '../images/sisphus.png'
import content from '../images/content-profile.png'


function Main4() {
    return (
        <div className="container mt-4 content-div-4">
        <div className="row content-container-div">
            <span className="content-container-div-spain"> <img src={sisphus} id="sisphus-id-img" alt=""
                    className="me-2"/>Sisphus</span>
        </div>
        <div className="row content-container-div-details">
            <h1>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
        </div>
        <div className="row content-container-div-profile"><img src={content} alt=""/></div>
        <div className="row content-container-div-details2">
            <span className="content-container-div-details2-span1">Candis Wu</span>
            <span className="content-container-div-details2-span2">Product Mangager, Sisphus</span>
        </div>
    </div>

    );
  }
  
  export default Main4;