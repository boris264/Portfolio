function Contact({ name, link }) {
    return (
        <a className="hoverTransition" 
           style={{textDecoration: "none"}} 
           href={link}>
            {name}
        </a>
    );
}

export default Contact;