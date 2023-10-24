import styles from './NavItem.module.css';

function NavItem({ name, location }) {
    const classes = `${styles.navitem} hoverTransition`;

    return (
        <a className={classes} href={location}>{name}</a>
    );
}

export default NavItem;