import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer_block">
                <div className="footer_container">
                    <nav className="footer_menu">
                        <ul className="footer_menu_list">
                            <Link to={"#"} className="footer_link">
                                <p className="footer_menu_title">О компании</p>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Партнёрская программа</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Вакансии</li>
                            </Link>
                        </ul>
                        <ul className="footer_menu_list">
                            <Link to={"#"} className="footer_link">
                                <p className="footer_menu_title">Меню</p>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Расчёт стоимости</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Услуги</li>
                            </Link>

                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Виджеты</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Интеграции</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Наши клиенты</li>
                            </Link>
                        </ul>
                        <ul className="footer_menu_list_without_title">
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Кейсы</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Благодарственные письма</li>
                            </Link> <Link to={"#"} className="footer_link">
                            <li className="footer_menu_item">Сертификаты</li>
                        </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Блог на Youtube</li>
                            </Link> <Link to={"#"} className="footer_link">
                            <li className="footer_menu_item">Вопрос / Ответ</li>
                        </Link>
                        </ul>

                        <ul className="footer_menu_list_address">
                            <Link to={"#"} className="footer_link"><p
                                className="footer_menu_title_address"> Контакты</p>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item_number">+7 555 555-55-55</li>
                            </Link>
                            <ul className={"footer_call"}>
                                <li className="footer_item_call">
                                    <Link to={"#"} className={"footer_link_call"}><img src="/img/telegram.svg" alt=""/></Link>
                                </li>
                                <li className="footer_item_call">
                                    <Link to={"#"} className={"footer_link_call"}><img src="/img/viber.svg"
                                                                                       alt=""/></Link>
                                </li>
                                <li className="footer_item_call">
                                    <Link to={"#"} className={"footer_link_call"}><img src="/img/whatsapp.svg" alt=""/></Link>
                                </li>
                            </ul>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_city">Москва, Путевой проезд 3с1, к 902</li>
                            </Link>
                        </ul>
                    </nav>
                    <div className="footer_bottom">
                        <ul className="footer_bottom_list">
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">©WELBEX 2022. Все права защищены.</li>
                            </Link>
                            <Link to={"#"} className="footer_link">
                                <li className="footer_menu_item">Политика конфиденциальности</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                {/*mobile part*/}
                <footer className="mobile_section">
                    <div className="footer_mobile_container">
                        <nav className="footer_mobile_nav">
                            <ul className="footer_mobile_list">
                                <Link to={"#"} className="footer_mobile_link">
                                    <p className="footer_mobile_menu_title">О компании</p>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Партнёрская программа</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Вакансии</li>
                                </Link>

                            </ul>
                            <ul className="footer_mobile_menu_list">
                                <Link to={"#"} className="footer_mobile_link">
                                    <p className="footer_mobile_menu_title">Меню</p>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Расчёт <br/> стоимости</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Услуги</li>
                                </Link>

                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Виджеты</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Интеграции</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Наши клиенты</li>
                                </Link>
                            </ul>
                            <ul className="footer_mobile_menu_list_without_title">
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Благодарственные письма</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Кейсы</li>
                                </Link> <Link to={"#"} className="footer_mobile_link">
                                <li className="footer_mobile_menu_item">Сертификаты</li>
                            </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Блог на Youtube</li>
                                </Link> <Link to={"#"} className="footer_mobile_link">
                                <li className="footer_mobile_menu_item">Вопрос / Ответ</li>
                            </Link>
                            </ul>

                            <ul className="footer_mobile_menu_list_address">
                                <Link to={"#"} className="footer_mobile_link"><p
                                    className="footer_mobile_menu_title_address"> Контакты</p>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">+7 555 555-55-55</li>
                                </Link>
                                <ul className={"footer_mobile_call"}>
                                    <li className="footer_mobile_item_call">
                                        <Link to={"#"} className={"footer_mobile_link_call"}><img src="/img/telegram.svg" alt=""/></Link>
                                    </li>
                                    <li className="footer_mobile_item_call">
                                        <Link to={"#"} className={"footer_mobile_link_call"}><img src="/img/viber.svg"
                                                                                           alt=""/></Link>
                                    </li>
                                    <li className="footer_mobile_item_call">
                                        <Link to={"#"} className={"footer_mobile_link_call"}><img src="/img/whatsapp.svg" alt=""/></Link>
                                    </li>
                                </ul>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_city">Москва, Путевой проезд 3с1, к 902</li>
                                </Link>


                            </ul>
                        </nav>
                        <div className="footer_mobile_bottom">
                            <ul className="footer_mobile_bottom_list">
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">©WELBEX 2022. Все права защищены.</li>
                                </Link>
                                <Link to={"#"} className="footer_mobile_link">
                                    <li className="footer_mobile_menu_item">Политика конфиденциальности</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                </footer>

            </footer>

        </>
    );
};

export default Footer;