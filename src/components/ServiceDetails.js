import React from "react";
import { Link } from "react-router-dom";

const info = ({ providerName, api }) => {
  const { info } = api;
  return (
    <div className="service-detail">
      {info ? (
        <div>
          <h1 className="text-center page-title">
            <img src={info?.["x-logo"]?.url} alt="logo" className="logo-lg" />
            {info.title}
          </h1>

          <div className="info">
            <h2 className="heading">Description</h2>
            {info?.description}
          </div>
          <div className="info">
            <h2>Swagger</h2>
            {api?.swaggerUrl}
          </div>
          <div className="info">
            <h2>Contact</h2>
            <ul className="contact-details">
              <li>
                <span className="left-title">Email</span> {info?.contact?.email}
              </li>
              <li>
                <span className="left-title">Name</span> {info?.contact?.name || providerName}
              </li>
              <li>
                <span className="left-title">URL </span>
                {info?.contact?.url}
              </li>
            </ul>
          </div>

          <div className="text-center">
            <button className="toggle-btn" onClick={null}>
              <Link to={`/`}>Explore more APIs</Link>
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default info;
