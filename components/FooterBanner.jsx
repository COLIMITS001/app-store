import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

const FooterBanner = ({ footerBanner: { discount, largeText1,
  largeText2, saleTime, smallText, midText, desc, product,
  buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p className="address">Visit one of our agency locations <br />or contact us today</p>
          <p className="address">Head Office</p>
            <FaMapMarkedAlt/>
            <p>456 Avenue street Nairobi</p>
            <FaEnvelope />
            <p>Contact cartcraze@gmail.com</p>
            <AiOutlineClockCircle />
            <p>Monday to Saturday: 09:00 to 18:00</p>
        </div>
        <img src={urlFor(image)} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner