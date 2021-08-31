import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom";
import { NavPanel } from "../../static/NavPanel";
import './centerHeader.css';

const CenterHeader = (props: PropsType) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navbar-header">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-center">
                <Nav className="nav-list">
                    {
                        NavPanel.map(navItem => {
                            return (
                                <div className="menu-item col-3 header-navItem ">
                                    <img src={navItem.thumbnail} alt="img" className="menu-background-img" />
                                    <Link to={navItem.href} key={navItem.id} className="" >{navItem.title}</Link>
                                </div>
                            );
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
interface PropsType {

}
export default CenterHeader;