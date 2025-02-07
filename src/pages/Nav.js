import profile from '../images/zysk-logo.png'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid ms-5">
        <img src={profile} id="nav-logo" alt=""/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
   
            <ul className="navbar-nav me-auto ms-3">
                <li className="nav-item me-2">
                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>

                <li className="nav-item me-2 ">
                    <select id="pro" name="products" className="drop-down">
                        <option value="Phone">Products</option>
                        <option value="Laptop">Laptop</option>
                    </select>
                </li>

                <li className="nav-item me-2 drop-down" id="Resources-id-drop-down">
                    <select id="pro" name="Resources" className="drop-down">
                        <option value="Phone">Resources</option>
                        <option value="Laptop">Laptop</option>
                    </select>
                </li>


                <li className="nav-item me-2">
                    <a className="nav-link" href="#contact">Pricing</a>
                </li>
            </ul>
           
            <div className="d-flex align-items-center me-5">
                <img src="https://imgs.search.brave.com/SUMwf0mg1My2VaEZXDjD6OZwIRA4R1UnNHH54Sp6PCY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzNm/LzJhLzNiM2YyYWZi/NTc4OGZkMzQ5ZTcw/YzlkNWRlZWYzODQx/LmpwZw"
                    alt="Profile" className="profile-img mr-20"/>
            </div>
        </div>
    </div>
</nav>
  );
}

export default Nav;