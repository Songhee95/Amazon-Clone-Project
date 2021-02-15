import React from 'react'

function FooterSubNav({title, sub}) {
    return (
        <>
        <td className="footer__sub__bottom__td">
        <a href="/" className="footer__sub__nav">
          {title}
        </a>
        <span className="footer__sub__nav__des">
          {sub}
        </span>
      </td>
      </>
    )
}

export default FooterSubNav
