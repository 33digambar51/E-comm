import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    // Get DB data
    const [user, setuser] = useState(getLocalUser());

    // useEffect(() => {
    //     console.warn("Use EffectHook");
    //     // call function getData()
    //     //getData();
    // })

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/users");
        result = await result.json();
        //console.log(result);
        //setUname(result);
    }

    // fetch user data from localStorage
    // const user = JSON.parse(localStorage.getItem("login-info"));
    // console.warn("User Info:", user);

    //Get data from local storage
    //const a = JSON.parse(localStorage.getItem("login-info"));
    //console.log("A:", a);

    function getLocalUser() {
        let user = localStorage.getItem("login-info");
        console.log("Login User:", user);
        if (user) {
            return JSON.parse(localStorage.getItem("login-info"));
        }
        else {
            return [];
        }
    }

    // Search Products
    // For redirect page
    const history = useHistory();

    //const [searchData, setSearchData] = useState(null);
    const [searchData, setSearchData] = useState([]);
    const [noData, setNoData] = useState(false);
    const [print, setPrint] = useState(false);

    // fetch API url and Get Data from API
    function search(key) {
        console.log(key);
        fetch("http://localhost:8000/list?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.log("Search Resp:", resp)
                if (resp.length > 0) {
                    setSearchData(resp)
                    setNoData(false)
                    setPrint(false)
                }
                else {
                    // setSearchData(null)
                    setSearchData([])
                    setNoData(true)
                    setNoData(false)
                    setPrint(false)
                }
            })
        })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    {/* <Link to="/" className="nav-link logo"><img src={"/images/img2.jpg"} alt="logo" /></Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">☰</span>
                    </button>
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <div className="collapse navbar-collapse" id="top-nav">
                        <ul className="navbar-nav">
                            <li className={splitLocation[1] === "" ? "nav-item active" : ""}>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className={splitLocation[1] === "all_product" ? "nav-item active" : ""}>
                                <Link to="/all_product" className="nav-link">All Products</Link>
                            </li>
                            <li className={splitLocation[1] === "cart" ? "nav-item active" : ""}>
                                <Link to="/cart" className="nav-link">Cart</Link>
                            </li>
                            <li className={splitLocation[1] === "my_account" ? "nav-item active" : ""}>
                                <Link to="/my_account" className="nav-link">My Account</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/categorys" className="nav-link">Category</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link" target="_blank">Add Product</Link>
                            </li>
                            <li className={splitLocation[1] === "todo_list" ? "nav-item active" : ""}>
                                <Link to="/todo_list" className="nav-link">ToDo</Link>
                            </li>
                            {
                                localStorage.getItem("login-info") ?
                                    null
                                    :
                                    <li className={splitLocation[1] === "register" ? "nav-item active" : ""}>
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                            }
                            <li className="nav-item search">
                                <div className="search-box">
                                    <div class="form-inline">
                                        <input onChange={(e) => search(e.target.value)} class="form-control mr-sm-0 border-0 rounded-0" type="text" placeholder="Search Product" />
                                        <button onClick={() => setPrint(true)} class="btn btn-primary bg-secondary btn-sm px-3 py-2 border-0 rounded-0" type="submit"><i className="fa fa-search"></i></button>

                                        {/* <SearchProduct/> */}
                                        {
                                            print ? history.push("./search_product") : null
                                        }
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" id="hide-show"><i className="fa fa-search"></i></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                localStorage.getItem("login-info") ?
                                    null
                                    :
                                    <li className={splitLocation[1] === "login" ? "nav-item active" : ""}>
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                            }
                            {
                                localStorage.getItem("login-info") ?
                                    <>
                                        <li className="nav-item dropdown">
                                            {
                                                user.map((item, id) =>
                                                    <Link key={id} className="nav-link" to="/">
                                                        <Link className="nav-link text-capitalize dropdown-toggle text-decoration-none" data-toggle="dropdown">
                                                            {item.uname}
                                                            {/* <img src={"http://localhost:8000/" + item.image} style={{ width: 35, height:35 }} /> */}
                                                            <img src={"/images/avatar.png"} style={{ width: 35, height: 35 }} alt="u-image" className="ml-2" />
                                                        </Link>
                                                        <div className="dropdown-menu mt-n2 shadow">
                                                            <Link to="/" className="dropdown-item"><i class="fa fa-home mr-1"></i>Dashboard</Link>
                                                            <Link to={"/my_order/" + item.id} className="dropdown-item"><i class="fa fa-sign-out mr-1"></i>My Orders</Link>
                                                            <Link to={"/profile/" + item.id} className="dropdown-item"><i class="fa fa-list mr-1"></i>Profile</Link>
                                                            <Link to={"/setting/" + item.id} className="dropdown-item"><i class="fa fa-key mr-1"></i>Setting</Link>
                                                            <Link to="/logout" className="dropdown-item"><i class="fa fa-power-off mr-1"></i>Logout</Link>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        </li>
                                    </>
                                    :
                                    null
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;