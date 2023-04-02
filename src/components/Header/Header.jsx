import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className={"header_ball"}>
                <img src="/img/purple_ball.svg" alt=""/></div>
            <header className="header">
                <div className="wrapper">
                    <div className={"header_wrapper"}>
                    <div className="header_logo">
                        <Link to={"/"} className={"header_logo_link"}>
                            <img className={"header_logo-pic"} src="/img/logo_welbex.svg" alt=""/>
                        </Link>
                        <p><img src="/img/logo_text.svg" alt=""/></p>
                    </div>
                    <div className="header menu">
                        <nav className="header_nav">
                            <ul className="header_list">
                                <li className="header_item">
                                    <Link to={"#"} className={"header_link"}>Услуги</Link>
                                </li>
                                <li className="header_item">
                                    <Link to={"#"} className={"header_link"}>Виджеты</Link>
                                </li>
                                <li className="header_item">
                                    <Link to={"#"} className={"header_link"}>Интеграции</Link>
                                </li>
                                <li className="header_item">
                                    <Link to={"#"} className={"header_link"}>Кейсы</Link>
                                </li>
                                <li className="header_item">
                                    <Link to={"#"} className={"header_link"}>Сертификаты</Link>
                                </li>

                            </ul>

                        </nav>
                    </div>
                    <div className="header_call">
                        <nav className="header_call_nav">
                            <ul className="header_call_list">
                                <li className="header_item_call">
                                    <Link to={"#"} className={"header_link_call_number"}>+7 555-555-55-55 </Link>&nbsp
                                </li>
                                <li className="header_item_call">
                                    <Link to={"#"} className={"header_link_call"}><img src="/img/telegram.svg" alt="" /></Link>
                                </li>
                                <li className="header_item_call">
                                    <Link to={"#"} className={"header_link_call"}><img src="/img/viber.svg" alt="" /></Link>
                                </li>
                                <li className="header_item_call">
                                    <Link to={"#"} className={"header_link_call"}><img src="/img/whatsapp.svg" alt="" /></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
                <nav className="header_mobile_nav">
                    <ul className="header_mobile_list">
                        <Link className="header_mobile_link"><li className="header_mobile_item">Услуги</li></Link>
                        <Link className="header_mobile_link"><li className="header_mobile_item">Виджеты</li></Link>
                        <Link className="header_mobile_link"><li className="header_mobile_item">Интеграции</li></Link>
                        <Link className="header_mobile_link"><li className="header_mobile_item">Кейсы</li></Link>

                    </ul>
                </nav>
                <div className="header_red_ball">
                    <img src="/img/red_ball.svg" alt=""/>
                </div>
            </header>
        </>
    );
};

export default Header;