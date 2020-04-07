import React from "react";
import "./Marketing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Marketing = () => {
  return (
    <div className="container">
      <div>
        <h2>Why Choose Us</h2>
        <p>
          Barton waited twenty always repair inwithin we do. An delighted
          offending <br />
          curiosity my is dashwoods at. Boy prosperous increasing surrounded
        </p>
      </div>
      <div>
        {/* <div className="mcard"></div>
        <div className="mcard"></div>
        <div className="mcard"></div> */}
        <div className="card-deck">
          <div className="card">
            <img
              src="https://i.ibb.co/GpLpkFs/adult-blur-blurred-background-687824.png"
              alt=""
            />
            <div className="card-body">
              <img
                src="https://i.ibb.co/Qb3L3fK/Group-204.png"
                alt="Group-204"
                border="0"
              />
              <div>
                <h5 className="card-title">First Delivery</h5>
                <p className="card-text">
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future.
                </p>
                <a href="#">
                  See more <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://i.ibb.co/SRvh236/chef-cook-food-33614.png"
              alt="chef-cook-food-33614"
            />
            <div className="card-body">
              <img
                src="https://i.ibb.co/nMWKp0y/Group-1133.png"
                alt="Group-1133"
                border="0"
              />
              <div>
                <h5 className="card-title">A Good Auto Responder</h5>
                <p className="card-text">
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future.
                </p>
                <a href="#">
                  See more <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://i.ibb.co/92rVQ0j/architecture-building-city-2047397.png"
              alt=""
            />
            <div className="card-body">
              <img
                src="https://i.ibb.co/5Ym52s7/Group-245.png"
                alt="Group-245"
                border="0"
              />
              <div>
                <h5 className="card-title">Home Delivery</h5>
                <p className="card-text">
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future.
                </p>
                <a href="#">
                  See more <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
