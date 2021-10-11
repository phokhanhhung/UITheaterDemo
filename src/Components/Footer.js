import React from 'react';
import './Footer.css';
import logo from '../Images/logo.png';
import facebook from '../Images/facebook.svg';
import youtube from '../Images/youtube.svg';
import instagram from '../Images/instagram.png';
import phone from '../Images/phone.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-nav-logo" style={{ backgroundImage: `url(${logo})`}}></div>
        <div className="footer-nav-info">
          <h2>Công ty TNHH UITheater</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-nav-list footer-nav-about">
          <h2>VỀ UITheater</h2>
          <ul>
            <li><a href="">Giới thiệu</a></li>
            <li><a href="">Hệ thống rạp</a></li>
            <li><a href="">Liên hệ</a></li>
            <li><a href="">Hỏi & đáp</a></li>
          </ul>
        </div>
        <div className="footer-nav-list footer-nav-term_and_condition">
          <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
          <ul>
            <li><a href="">Quy định chung</a></li>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Điều khoản giao dịch</a></li>
            <li><a href="">Thông tin công ty</a></li>
          </ul>
        </div>
        <div className="footer-nav-list footer-nav-recruitment">
          <h2>TUYỂN DỤNG</h2>
          <ul>
            <li><a href="">Nhân viên bán vé - soát vé</a></li>
            <li><a href="">Quản lý rạp phim</a></li>
          </ul>
        </div>
        <div className="footer-nav-contact">
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <ul className="social-list">
            <li><div style={{backgroundImage: `url(${facebook})`}}></div></li>
            <li><div style={{backgroundImage: `url(${youtube})`}}></div></li>
            <li><div style={{backgroundImage: `url(${instagram})`}}></div></li>
          </ul>
          <div className="hotline">
            <div className="phone-icon" style={{backgroundImage: `url(${phone})`}}></div>
            <div className="hotline-text">
              <h3>HOTLINE</h3>
              <p>028 7300 8881</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2021 UITheater Cinemas. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
