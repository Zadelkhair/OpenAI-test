import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Toast } from "toaster-js"; // const { Toast } = require("toaster-js/umd.js");
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function Needs(props) {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(1);

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const submit = () => {
    // check if its loading
    if (loading) {
      return;
    }

    // check if the search is not empty
    if (!search) {
      // display error message
      Toastify({
        text: "Please enter a search",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();

      return;
    }

    // set start loading
    setLoading(true);

    let query = "";

    // generate a query string
    query +=
      "Help me find the right developer & technologies\nWhat i am looking for : \n" +
      search +
      " \n";

    // add all questions
    questions.forEach((q) => {
      if (q.answer) query += q.question + " :\n" + q.answer + " \n";
    });

    console.log(query);

    axios
      .post("http://localhost:3080/search", {
        query,
      })
      .then((response) => {
        // set loading to false
        setLoading(false);

        // Your request has been sent
        Toastify({
          text: response.data.data,
          duration: 3000,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();

        // navigate to /out
        navigate("/out", { state: response.data.data });

        // clear the search
        setSearch("");
      })
      .catch(() => {
        // set loading to false
        setLoading(false);

        // display error message
        Toastify({
          text: "Error sending search",
          duration: 3000,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
      });
  };

  // load the questions
  const loadQuestions = () => {
    // load the questions
    axios
      .get("http://localhost:3080/questions")
      .then((response) => {
        // set the questions
        setQuestions(response.data);
        // Toastify({
        //   text: "Questions loaded",
        //   duration: 3000,
        //   gravity: "bottom", // `top` or `bottom`
        //   position: "right", // `left`, `center` or `right`
        //   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        //   stopOnFocus: true, // Prevents dismissing of toast on hover
        // }).showToast();
      })
      .catch(() => {
        // display error message
        Toastify({
          text: "Error loading questions",
          duration: 3000,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
      });
  };

  useEffect(() => {
    loadQuestions();
    if (location.state) {
      setSearch(location.state);
    }
  }, []);

  return (
    <>
      <div className="question-container">
        {questions?.length > 0 && (
          <>
            <div className="question">
              <h2>{questions[id - 1].question}</h2>
            </div>
            <div className="answer">
              <textarea
                name="answer"
                id="answer"
                cols="50"
                rows="5"
                placeholder="Enter your answer here"
                value={questions[id - 1].answer}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[id - 1].answer = e.target.value;
                  setQuestions(newQuestions);
                }}
              ></textarea>
            </div>

            {/* the buttons */}
            <div className="buttons">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (id > 1) {
                    setId(id - 1);
                  }
                }}
              >
                Previous
              </button>
              <button
                disabled={loading}
                className="btn btn-primary"
                onClick={() => {
                  if (id < 10) {
                    setId(id + 1);
                  } else {
                    // submit
                    submit();
                  }
                }}
              >
                {loading ? (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
