import React from 'react';
import Head from 'next/head';
import './Default.scss';

const Layout = (props) => (
  <>
    <Head>
      <title>Bukwild Vue → React Test</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        charSet="utf-8"
        key="viewport"
      />
    </Head>

    <div className="layout">
      <a href="www.bukwild.com" >
        <img className="logo" src="https://www.bukwild.com/logo.png" alt="Bukwild" />
      </a>

      <h1 className="title">Vue → React</h1>
      {props.children}
    </div>
  </>
);

export default Layout;