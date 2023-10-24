import Contact from './Contact';
import styles from './Contacts.module.css';

function Contacts() {
    const contacts = [
        {
            name: "Github",
            href: "https://github.com/boris264/"
        },
        {
            name: "LinkedIn",
            href: "placeholder"
        },
        {
            name: "Email",
            href: "mailto:boristodorov12@gmail.com"
        }
    ];

    return (
        <div className={styles.contacts}>
            <h2>Contacts</h2>
            <p>You can find me on:</p>
            <ul className={styles.contactsList}>
                {contacts.map(c => {
                    return <li key={c.href}>
                               <Contact name={c.name} link={c.href}/>
                           </li>
                })}
            </ul>
        </div>
    );
}

export default Contacts;