import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <div className="app">
                <Layout>
                    <Home/>
                    <Footer/>
                </Layout>

            </div>

        </>
    );
};

export default App;