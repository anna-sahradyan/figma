import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="wrapper_main">
                <div className="main_block_left">
                    <div className="title_main">
                        <h3>Зарабатывайте больше <img src="/img/title2.svg" alt="welbex"/></h3>
                    </div>
                    <div className="sub_title">
                        <h6>Развиваем и контролируем продажи за вас</h6>
                    </div>

                </div>
                <div className="main_block_right">
                    <div className="home_subtitle11">
                        <img src="/img/title3.svg" alt="Вместе с бесплатной консультацией мы дарим"/>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="home_title4">
                                <img src="/img/title41.svg" alt="Виджеты"/>
                            </td>
                            <td className="home_title_subtitle4">
                                <img src="/img/title42.svg" alt="30 готовых решений"/>
                            </td>
                            <td className="home_title5">
                                <img src="/img/title5.svg" alt="Dashboard"/>
                            </td>
                            <td className="home_title_subtitle5">
                                <img src="/img/title5a.svg" alt="с показателями
вашего бизнеса"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="home_title6">
                                <img src="/img/title6.svg" alt="Skype Аудит"/>
                            </td>
                            <td className="home_title_subtitle6">
                                <img src="/img/title4.svg" alt="отдела продаж и CRM системы"/>
                            </td>
                            <td className="home_title7">
                                <img src="/img/title7.svg" alt="35 дней"/>
                            </td>
                            <td className="home_title_subtitle7">
                                <img src="/img/title7a.svg" alt="использования CRM"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"home_small_red_ball"}>
                    <img src="/img/red_ball_small.svg" alt="small_red_ball"/>
                </div>
                <div className="home_button">
                    <button className={"submit_button"}>Получить консультацию</button>
                </div>

            </div>
        </>
    );
};

export default Home;