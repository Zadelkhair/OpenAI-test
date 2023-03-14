// component coming soon
// we will add a background video played automatically "coming_soon.mp4"
// the video is black with text chant in a black console with a chatboot
// this will located on /comingsoon
// will be loaded in a layoutcomponent that contain a header
// it will contain a register in the right ( because the video contains a text in the left )
// the registration form will be transparent and light lika a glass
// the registration form will be lake github, asking just for an email

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import jsTypeText from "js-type-text";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import api from "../conf/api";
// if the route is /comingsoon import the ./styles/ComingSoon.css

export default function ComingSoonComponent() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [email, setEmail] = useState("");
  const [areYouADev, setAreYouADev] = useState(false);
  const [areYouAClient, setAreYouAClient] = useState(false);

  // mount the component
  React.useEffect(() => {
    const text1 = "Welcome to HackrHQ";
    const text2 = "register for early access";

    jsTypeText.start(
      {
        text: text1 + "&" + text2 + "&END",
      },
      (result) => {
        // check if cotains &END
        if (result.includes("&END")) {
          // remove &END
          result = result.replace("&END", "");
          // stop the animation
          jsTypeText.stop();
          typetextCompleted();
          return;
        }

        const [text1, text2] = result.split("&");
        setText1(text1);
        setText2(text2);
      }
    );
  }, []);

  const typetextCompleted = () => {
    // show the coming-soon-email
    anime({
      targets: ".coming-soon-dev",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
      // before begin
      begin: () => {
        // make the coming-soon-email visible
        document.querySelector(".coming-soon-dev").style.display = "block";
        // on click on the yes or no button
      },
    });
  };
  const areYouADevCompleted = () => {
    anime({
      targets: ".coming-soon-client",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
      // before begin
      begin: () => {
        // make the coming-soon-client visible
        document.querySelector(".coming-soon-client").style.display = "block";
      },
    });
  };

  //
  const areYouAClientCompleted = () => {
    anime({
      targets: ".coming-soon-email",
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuad",
      // before begin
      begin: () => {
        // make the coming-soon-email visible
        document.querySelector(".coming-soon-email").style.display = "block";
      },
    });
  };

  //
  const submitForm = () => {
    // send to API_URL/comingsoon
    axios
      .post(
        api.url + "/comingsoon"
        , {
        email,
        areYouADev,
        areYouAClient,
      })
      .then((res) => {
        // show a toast
        Toastify({
          text: "Thank you for your interest, we will contact you soon",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          stopOnFocus: true,
        }).showToast();
      }).
      catch((err) => {
        // show a toast
        Toastify({
          text: "Something went wrong, please try again later",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          // red
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          stopOnFocus: true,
        }).showToast();
      });
  };

  return (
    <>
      <div className="coming-soon">
        <div className="coming-soon-header">
          <div className="container">
            <div className="logo">
              <NavLink to="/">
                <img src="/logo-white.png" alt="logo-white" />
              </NavLink>
            </div>
            <div className="menu">
              {/* <a href="#signup" className="signup-btn">
                                Sign In
                            </a> */}
            </div>
          </div>
        </div>
        <div className="coming-soon-content">
          {/* autoplayed video */}
          <video autoPlay muted loop id="myVideo">
            <source src="/coming_soon.mp4" type="video/mp4" />
          </video>
          {/* registration form */}
          <div className="coming-soon-form">
            <div className="welcome">
              <p className="p1">{text1}</p>
              <p>{text2}</p>
            </div>
            <div className="coming-soon-form-group coming-soon-dev">
              {/* are you a dev ? (yes no buttons) */}
              <div className="label">
                <label htmlFor="email">- Are you a developer ?</label>
              </div>
              <div className="input d-flex">
                <div
                  className="buttons btn-group btn-group-toggle mx-auto"
                  data-toggle="buttons"
                >
                  <label className="btn">
                    <input
                      type="radio"
                      name="options-dev"
                      id="option1"
                      autoComplete="off"
                      onChange={() => {
                        setAreYouADev(true);
                        areYouADevCompleted();
                      }}
                    />{" "}
                    Yes
                  </label>
                  <label className="btn">
                    <input
                      type="radio"
                      name="options-dev"
                      id="option2"
                      autoComplete="off"
                      onChange={() => {
                        setAreYouADev(false);
                        areYouADevCompleted();
                      }}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="coming-soon-form-group coming-soon-client mt-3">
              {/* are you looking for a dev ? ? (yes no buttons) */}
              <div className="label">
                <label htmlFor="email">
                  - Are you looking for a developer ?
                </label>
              </div>
              <div className="input d-flex">
                <div
                  className="buttons btn-group btn-group-toggle mx-auto"
                  data-toggle="buttons"
                >
                  <label className="btn">
                    <input
                      type="radio"
                      name="options-client"
                      id="option1"
                      autoComplete="off"
                      onChange={() => {
                        setAreYouAClient(true);
                        areYouAClientCompleted();
                      }}
                    />{" "}
                    Yes
                  </label>
                  <label className="btn">
                    <input
                      type="radio"
                      name="options-client"
                      id="option2"
                      autoComplete="off"
                      onChange={() => {
                        setAreYouAClient(false);
                        areYouAClientCompleted();
                      }}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="coming-soon-form-group mt-2 coming-soon-email mt-3">
              <div className="label">
                <label htmlFor="email">- Your email</label>
              </div>
              <div className="d-flex mt-2 justify-content-center align-items-center">
                <div className="input">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="button ms-2">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-sm"
                    onClick={() => submitForm()}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
