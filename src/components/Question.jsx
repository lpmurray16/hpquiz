import React from "react";
import questions from "../assets/questions";

const Question = () => {
    const renderedQuestions = questions.map((q) => {
        return (
            <div className="wrap_question" key={q.question}>
                <h3>{q.question}</h3>
                <p>
                    A. <button className="bttn_selector">{q.a}</button>
                </p>
                <p>
                    B. <button className="bttn_selector">{q.b}</button>
                </p>
                <p>
                    C. <button className="bttn_selector">{q.c}</button>
                </p>
                <p>
                    D. <button className="bttn_selector">{q.d}</button>
                </p>
            </div>
        );
    });

    return <div>{renderedQuestions}</div>;
};

export default Question;
