import message from '../images/message-icon.png'
import energy from '../images/energy.png'
import manage from '../images/manage.png'
import emogi from '../images/emogi.png'
import tools from '../images/tools.png'
import deference from '../images/deference.png'

function Main3() {
  return (
    <div className="container mt-4">


    <div className="row mb-4 text-center">
        <div className="row mb-3"><span className="feature-text-div">Features</span></div>
        <div className="row mb-3">
            <h2>Analytics that feels like it's from the future</h2>
        </div>
        <div className="row third-div-details mb-3"><span> self-serve product and growth analytics to help you convert,
                engage, and retain more user. Trusted by over 4,000 startups.</span></div>
    </div>




    <div className="row mt-5">


        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={message} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Share team inboxes</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">Whether you have a team of 2 or 200, our shared team inboxes keep
                        everyone on the same page and in the loop.</span>
                </div>

            </div>
        </div>

        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={energy} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Deliver instant answers</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">An all-in-one customer service platform that helps you balance
                        everything your customers need to be happy.</span>
                </div>

            </div>
        </div>

        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={manage} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Manage your team with reports</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">Measure what matters with Untitled’s easy-to-use reports. You can
                        filter, export, and drilldown on the data in a couple clicks.</span>
                </div>

            </div>
        </div>

        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={emogi} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Connect with customers</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">Solve a problem or close a sale in real-time with chat. If no one
                        is available, customers are seamlessly routed to email without confusion.</span>
                </div>

            </div>
        </div>

        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={tools} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Connect the tools you already use</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">Explore 100+ integrations that make your day-to-day workflow more
                        efficient and familiar. Plus, our extensive developer tools.</span>
                </div>

            </div>
        </div>


        <div className="col-12 col-lg-4 mb-3 ">
            <div className="card">
                <img src={deference} className="card-img-top" alt="Boltshift"/>
                <div className="card-body company-titile-div">
                    <span className="company-titile">Our people make the difference</span>
                </div>
                <div className="card-body company-details-div">
                    <span className="company-details">We’re an extension of your customer service team, and all of our
                        resources are free. Chat to our friendly team 24/7 when you need help.</span>
                </div>

            </div>
        </div>

    </div>

    </div>
  );
}

export default Main3;