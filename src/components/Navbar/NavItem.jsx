import styles from './NavItem.module.css';

function NavItem({ name, location }) {
    const classes = `${styles.navitem} ${styles.navitemHoverTransition}`;

    return (
        <a className={classes} href={location}>{name}</a>
    );
}

export default NavItem;