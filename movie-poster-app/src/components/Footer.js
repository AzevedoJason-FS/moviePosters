import { RiMovie2Line } from "react-icons/ri";

const Footer = () => {
    return(
        <footer style={styles.footer}>
            <div style={styles.infoBox}>
                <div style={styles.square}>
                    <h2 style={styles.h2}>RETAIL</h2>
                    <p style={styles.p}>17 - 1875 Leslie Street, Toronto, Ontario</p>
                </div>
                <div style={styles.square}>
                    <h2 style={styles.h2}>CALL US</h2>
                    <p style={styles.p}>10877-876-7837 | 416-391-0133</p>
                </div>
                <div style={styles.square}>
                    <h2 style={styles.h2}>EMAIL US</h2>
                    <p style={styles.p}>comment@movieposters.com</p>
                </div>
            </div>
            <div className='title' style={styles.title}>
                <RiMovie2Line style={styles.logoIcon}/><a href="/" style={styles.a}><h2 style={styles.title_h2}>movieposters.com</h2></a>
            </div>
            <div style={styles.links}>
               <ul style={styles.ul}>
                   <li>
                       <h4 style={styles.linkTitle}>FOLLOW US</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>TIK TOK</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>FACEBOOK</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>INSTAGRAM</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>TWITTER</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>PINTREST</h4>
                    </li>
               </ul>
               <ul style={styles.ul}>
                   <li>
                       <h4 style={styles.linkTitle}>ABOUT US</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>OUR STORY</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>POSTER REWARDS</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>GIFT CARDS</h4>
                    </li>
                    <li>
                       <h4 style={styles.linkTitle}>FAQS</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>SHIPPING</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>RETURNS</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>CONTACT</h4>
                    </li>
               </ul>
               <ul style={styles.ul}>
                   <li>
                       <h4 style={styles.linkTitle}>FRAMING</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>READY MADE</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>CUSTOM</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>CANVAS</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>PLAKS</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>BACK LIT</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>SUPPLIES</h4>
                    </li>
               </ul>
               <ul style={styles.ul}>
                   <li>
                        <h4 style={styles.linkTitle}>SUBSSCRIBE</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>VIP EXCLUSIVES</h4>
                    </li>
                    <li>
                       <h4 style={styles.link}>NEW RELEASE UPDATE</h4>
                    </li>
               </ul>
           </div>
           <p style={styles.rights}>© 2022 Movieposters.com All rights reserved. Privacy Policy</p>
        </footer>
    )
}

export default Footer;

const styles = {
    footer: {
        bottom: '0',
        background: 'black',
        width: '100%'
    },

    h2: {
        color: 'white',
        fontSize: '1.25rem'
    },

    p: {
        color: 'white',
        margin: '0',
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '30px'
    },

    ul: {
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: '0',
        padding: '0'
    },

    infoBox: {
        display: 'flex',
        maxWidth: '1500px',
        margin: 'auto',
        justifyContent: 'space-evenly',
        paddingTop: '60px'
    },

    square: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '300px'
    },

    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px'
    },

    logoIcon: {
        color: 'white',
        fontSize: '60px'
    },

    links: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px'
    },

    linkTitle: {
        fontSize: '.75rem',
        marginRight: '10px'
    },

    link: {
        fontSize: '1.5rem',
        margin: '10px 16px 0 0'
    },

    rights: {
        textAlign: 'center',
        color: 'grey',
        margin: '40px 0 0 0',
        paddingBottom: '60px'
    }
}