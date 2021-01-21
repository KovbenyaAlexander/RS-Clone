import React from 'react';
import rslogo from '../../assets/UI/rs_school_js.svg';
import './Footer.css';
import { AuthContext } from '../../context/AuthContext'

export const Footer = (props) => {

  return (
    <AuthContext.Consumer>
      {context => (
        <footer>
          <div className='rslogo'>
            <a href='https://rs.school/'>
              <img className='rsimg' src={rslogo} alt='rslogo' />
            </a>
          </div>
          <div className='materials'>
            <h5>2021</h5>
            <hr />
            <ul className='materials-ul'>
              <li className='material-ul__li'><a className='materials__link youtube' href='/'>YOUTUBE</a></li>
              <li className='material-ul__li'><a className='materials__link' href='/'>MEDIUM</a></li>
            </ul>
          </div>
          <div className='developers'>
            <h5>{context.state.developers}</h5>
            <hr />
            <ul className='developers-ul'>
              <li className='developers-ul__li'><a className='developers__link' href='/'>{context.state.footerAnisimov}</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>{context.state.footerKovbenya}</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>{context.state.footerMartinkevich}</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>{context.state.footerChazov}</a></li>
            </ul>
          </div>
        </footer>
      )
      }
    </AuthContext.Consumer>
  )

};
