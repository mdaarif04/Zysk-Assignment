
import plus from '../images/circle-with-plus.png'
import minus from '../images/circle-with-minus.png'

function Main5() {
    return (
        <div className="container mt-5 content-div-5">
        <div className="row">
            <div className="row content-div-5-header">
                <h2>Frequently asked questions</h2>
            </div>
            <div className="row content-div-5-details"><span>Everything you need to know about the product and
                    billing.</span></div>
        </div>
        <div className="row mt-5 content-div-5-questions-section">
            <ul>
                <li className="">
                    <div className="row">
                        <div className="col-11">
                            <div className="row">
                                <h5>Is there a free trial available?</h5>
                            </div>
                            <div className="row"><span>Yes, you can try us for free for 30 days. If you want, we’ll
                                    provide you with a free, personalized 30-minute onboarding call to get you up
                                    and running as soon as possible.</span></div>
                        </div>
                        <div className="col-1"><img src={minus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
                <hr/>
                <li className="">
                    <div className="row mt-4">
                        <div className="col-11">
                            <div className="row">
                                <h5>Is there a free trial available?</h5>
                            </div>
                        </div>
                        <div className="col-1"><img src={plus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
                <hr/>
                <li className="">
                    <div className="row mt-4">
                        <div className="col-11">
                            <div className="row">
                                <h5>What is your cancellation policy?</h5>
                            </div>
                        </div>
                        <div className="col-1"><img src={plus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
                <hr/>
                <li className="">
                    <div className="row mt-4">
                        <div className="col-11">
                            <div className="row">
                                <h5>Can other info be added to an invoice?</h5>
                            </div>
                        </div>
                        <div className="col-1"><img src={plus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
                <hr/>
                <li className="">
                    <div className="row mt-4">
                        <div className="col-11">
                            <div className="row">
                                <h5>How does billing work?</h5>
                            </div>
                        </div>
                        <div className="col-1"><img src={plus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
                <hr/>
                <li className="">
                    <div className="row mt-4">
                        <div className="col-11">
                            <div className="row">
                                <h5>How do I change my account email?</h5>
                            </div>
                        </div>
                        <div className="col-1"><img src={plus}
                                className="content-div-5-questions-section-icons" alt=""/></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
  }
  
  export default Main5;