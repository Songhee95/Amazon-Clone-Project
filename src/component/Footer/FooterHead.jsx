import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function FooterHead() {
    return (
        <div className='footer__head__container'>
            <div className="footer__head__line footer__head__line__first">
                <h6>Get to Know Us</h6>
                <Link to='/'>Careers</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>About Amazon</Link>
                <Link to='/'>Press Center</Link>
                <Link to='/'>Investor Relations</Link>
                <Link to='/'>Amazon Devices</Link>
                <Link to='/'>Amazon Tours</Link>
            </div>
            <div className="footer__head__line footer__head__line__second">
                <h6>Make Money with Us</h6>
                <Link>Sell Products on Amazon</Link>
                <Link>Sell apps on Amazon</Link>
                <Link>Become an Affiliate</Link>
                <Link>Advertise Your Products</Link>
                <Link>Self-Publish with us</Link>
                <Link>Host an Amazon Hub</Link>
                <Link>› See More Make Money with Us</Link>
            </div>
            <div className="footer__head__line footer__head__line__third">
                <h6>Amazon Payment Products</h6>
                <Link>Amazon Rewards Visa Signature Cards</Link>
                <Link>Amazon.com Store Card</Link>
                <Link>Amazon Business Card</Link>
                <Link>Amazon Business Line of Credit</Link>
                <Link>Shop with Points</Link>
                <Link>Credit Card Marketplace</Link>
                <Link>Reload Your Balance</Link>
                <Link>Amazon Currency Converter</Link>
            </div>
            <div className="footer__head__line footer__head__line__fourth">
                <h6>Let Us Help You</h6>
                <Link>Amazon and COVID-19</Link>
                <Link>Your Account</Link>
                <Link>Your Orders</Link>
                <Link>Shipping Rates & Policies</Link>
                <Link>Amazon Prime</Link>
                <Link>Returns & Replacements</Link>
                <Link>Manage Your Content and Devices</Link>
                <Link>Amazon Assistant</Link>
                <Link>Help</Link>
            </div>
        </div>
    )
}

export default FooterHead
