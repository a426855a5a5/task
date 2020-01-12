import React from 'react';
import Head from './Head';
import Main from './Main';
import Position from './Position';
import Footer from './Footer';

export default class Index extends React.Component {
    Astop() {
        this.refs.mar.stop();
    }

    Astart() {
        this.refs.mar.start();
    }
    Start() {
        console.log(this.refs.mar.firstChild);
        this.refs.mar.firstChild.innerHTML += this.refs.mar.firstChild.innerHTML;
    }
    render() {
        return (
            <>
                <Head />
                <Main />
                <Position />
                <Footer />
            </>
        )
    }
}
