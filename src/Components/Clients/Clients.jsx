// Clients.js
import React from 'react';
import './Clients.css';
import msOpticians from '../Assets/msOpticians.png';
import  cytoplan from '../Assets/Cytoplan.jpg';
import Authority from '../Assets/6West-Midlands-Authority.jpg'
import lovepik from "../Assets/lovepik-life-service.png";
import green from "../Assets/green.png";
import connect from '../Assets/pngtree-connect-logo.jpg';
import happy from '../Assets/pngtree-happy-shop.jpg';
import rics from '../Assets/rics.png';
import client1 from "../Assets/client1.png";
import name from "../Assets/name.jpg";
import academia from "../Assets/academia.jpg";
import autopart from "../Assets/autopart.jpg";
import bookers from "../Assets/bookers.jpg";
import drywall from "../Assets/drywall.jpg";
import electricity from "../Assets/electricity.jpg";
import exvater from "../Assets/exvater.jpg";
import feremmer from "../Assets/feremmer.jpg";
import gears from "../Assets/gears.jpg";
import home from "../Assets/home.jpg";
import catering from "../Assets/lovepik-catering-logo.png";
import master from "../Assets/master.jpg";
import school from "../Assets/school.jpg";






const Clients = () => {
  return (
    <div className="clients">
      <h2>Our Clients</h2>
      <p>The  <span className="highlight">relationships </span> we've established over the years are at the heart of our success</p>
      <p>We work diligently to cultivate and maintain these bonds.</p>
      <p className="without-you">"It is your trust and support that empower us to pursue our passion each day."</p>
      <div className="clients-logos">
        <img src={msOpticians} alt="M&S Opticians" />
        <img src={cytoplan} alt="Cytoplan" />
        <img src={Authority} alt="West-Midlands-Authority" />
        <img src={lovepik} alt="LovePik" />
        <img src={green} alt="Green" />
        <img src={connect} alt="Connect" />
        <img src={happy} alt="Happyshop" />
        <img src={rics} alt="Rics" />
        <img src={client1} alt="Client1" />
        <img src={name} alt="Name" />
        <img src={academia} alt="Academia" />
        <img src={autopart} alt="Autopart" />
        <img src={bookers} alt="Bookers" />
        <img src={drywall} alt="Drywall" />
        <img src={electricity} alt="Electricity" />
        <img src={exvater} alt="Exvater" />
        <img src={feremmer} alt="Feremmer" />
        <img src={gears} alt="Gears" />
        <img src={home} alt="Home" />
        <img src={catering} alt="Catering" />
        <img src={master} alt="Master" />
        <img src={school} alt="School" />

      </div>
    </div>
  );
};

export default Clients;
