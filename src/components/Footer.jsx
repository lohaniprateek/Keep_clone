function Footer(){
    const date =  new Date();
    let currentYear = date.getFullYear();
    return(
        <>
        <p className="footer">Copyright@{currentYear}</p>
        </>
    )
}

export default Footer;