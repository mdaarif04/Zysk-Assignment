import profile1 from '../images/boltshift.png'
import profile2 from '../images/lightbox.png'
import profile3 from '../images/featherDev.png'
import profile4 from '../images/spherule.png'
import profile5 from '../images/globalBank.png'
import profile6 from '../images/Nietzsche.png'

function Main2() {
  return (
    <div className="container mt-5">

    <div className="row mb-4">
        <div className="col-12">
            <p className="text-center">This is some simple text. It will stay on one line across all screen sizes.</p>
        </div>
    </div>

  
    <div className="row">
   
        <div className="col-6 col-lg-2 mb-3">
            <img src={profile1} className="second-content-img" alt=""/> <span className="company-name">Boltshift</span>
        </div>

      
        <div className="col-6 col-lg-2 mb-3">
            <img src={profile2} className="second-content-img" alt=""/> <span className="company-name">Lightbox</span>
        </div>

       
        <div className="col-6 col-lg-2 mb-3">
            <img src={profile3} className="second-content-img" alt=""/> <span
                className="company-name">FeatherDev</span>
        </div>

       
        <div className="col-6 col-lg-2 mb-3">
            <img src={profile4} className="second-content-img" alt=""/> <span className="company-name">Spherule</span>
        </div>

        <div className="col-6 col-lg-2 mb-3">
            <img src={profile5} className="second-content-img" alt=""/> <span
                className="company-name">GlobalBank</span>
        </div>

        
        <div className="col-6 col-lg-2 mb-3">
            <img src={profile6} className="second-content-img" alt=""/> <span className="company-name">Nietzsche</span>
        </div>
    </div>

</div>
  );
}

export default Main2;
