import React from 'react'
import logo from '../Images/logo.svg';
import logoTicket from '../Images/tickets.svg';
import './Header.css'
import Home from './Home'
import Movies from './Movies'
import Showtime from './Showtime'
import Theaters from './Theaters'
import News from './News'
import Contact from './Contact'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="wrap">

                <div className="nav">
                    <div className="nav-logo">
                        <img className="logo" src={logo} alt="logo" />
                    </div>

                    <div className="nav-wrap">
                        <div className="nav-wrap-top">
                            <div className="nav-wrap-top-search">
                                <i className="nav-wrap-top-search-icon fas fa-search"></i>
                                <input type="text" className="nav-wrap-top-search-input" placeholder="Tìm kiếm"></input>
                            </div>
                            <button className="nav-wrap-top-login">Đăng nhập</button>
                            <button className="nav-wrap-top-register">Đăng ký</button>
                        </div>
                        
                        <Router>
                            <ul className="nav-wrap-bottom">
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/">TRANG CHỦ</Link>
                                </li>
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/movies">PHIM</Link>
                                </li>
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/showtime">LỊCH CHIẾU</Link>
                                </li>
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/theaters">RẠP VÀ GIÁ RẺ </Link>
                                </li>
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/news">TIN TỨC</Link>
                                </li>
                                <li>
                                    <Link className="nav-wrap-bottom-item" to="/contact">LIÊN HỆ</Link>
                                </li>
                            </ul>

                            <Switch>
                                <Route path="/"> <Home /> </Route>
                                <Route path="/movies"> <Movies /> </Route>
                                <Route path="/showtime"> <Showtime /> </Route>
                                <Route path="/theaters"> <Theaters /> </Route>
                                <Route path="/news"> <News /> </Route>
                                <Route path="/contact"> <Contact /> </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>

            <div className="buy-ticket">
                <div className="wrap">
                    <div className="buy-ticket-img-wrap">
                        <img className="buy-ticket-img" src={logoTicket} alt="logo" />
                        <h3 className="buy-ticket-title">MUA VÉ ONLINE</h3>
                    </div>

                    <select name="movie" className="buy-ticket-input-item">
                        <option>Chọn phim</option>
                    </select>
                    <select name="theater" className="buy-ticket-input-item">
                        <option>Chọn rạp</option>
                    </select>
                    <select name="date" className="buy-ticket-input-item">
                        <option>Chọn ngày</option>
                    </select>
                    <select name="number" className="buy-ticket-input-item">
                        <option>Chọn xuất chiếu</option>
                    </select>

                    <button className="buy-ticket-buy">MUA VÉ</button>
                </div>
            </div>
        </header>
    )
}

export default Header
