import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('login', { replace: true });
        window.location.reload();

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">



            <div className="navbar-collapse" >
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>


            <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <button className="btn btn-outline-info"
                        onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}