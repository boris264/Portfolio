import NavItem from "./NavItem";
import styles from './Navbar.module.css';
import { createNavigationItemInfos } from "./common/NavigationItemInfo";

const navItemInfos = [
    {
        name: "Home", 
        href: "#home"
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Certificates",
        href: "#certificates"
    },
    {
        name: "Contacts",
        href: "#contacts"
    },
    {
        name: "My CV",
        href: "/CV_EN_EF.pdf"
    }
]

function Navbar() {
    const navItems = createNavigationItemInfos(navItemInfos);

    return (
        <nav className={styles.navbar}>
            {navItems.map(ni => <NavItem key={ni.href} location={ni.href} name={ni.name} />)}
        </nav>
    );
}

export default Navbar;