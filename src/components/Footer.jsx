const Footer = () => {
    const d = new Date()
    const fullYear = d.getFullYear()

    return <footer>
        Copyright © {fullYear} Rotamiya Corporation
    </footer>
}

export default Footer;