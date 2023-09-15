import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = ({ openServiceDetail }) => {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [providersApis, setProvidersApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.apis.guru/v2/providers.json")
      .then((response) => {
        setProviders(response.data.data);
      })
      .catch((error) => {
        alert("Error fetching providers:", error);
      });
  }, []);

  const handleClick = (provider) => {
    setSelectedProvider(selectedProvider === provider ? null : provider);
    axios
      .get(`https://api.apis.guru/v2/${provider}.json`)
      .then((response) => {
        setProvidersApi(response.data.apis);
      })
      .catch((error) => {
        alert("Error fetching service details:", error);
      });
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <h4 className="text-center">Select Provider</h4>
        {providers.map((provider) => (
          <li
            className={`sidebar-list-item ${
              selectedProvider === provider ? "active" : "inactive"
            }`}
            key={provider}
            onClick={() => handleClick(provider)}
          >
            <div className="d-flex">
              {provider}
              <span
                className={`arrow ${
                  selectedProvider === provider ? "expanded" : "down"
                }`}
              >
                ❮
              </span>
            </div>
            {selectedProvider === provider && (
              <ul className="nested-list">
                {Object.keys(providersApis).map((key) => {
                  const api = providersApis[key];
                  const { info } = api;
                  const imgURL =
                    info?.["x-logo"]?.url ||
                    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";
                  return (
                    <li
                      key={key}
                      className="nested-list-item"
                      onClick={() => openServiceDetail(provider, api)}
                    >
                      <Link to={`/detail/${provider}`}>
                        <span className="">
                          <img src={imgURL} alt="logo" className="logo" />
                          {info.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
