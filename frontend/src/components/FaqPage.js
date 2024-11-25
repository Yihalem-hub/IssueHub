import React, { useState } from "react";
import "../styles/FaqPage.css";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "How can I report an issue?",
      answer: "Go to the Report Issue section and fill out the form.",
    },
    {
      question: "Can I report issues anonymously?",
      answer:
        "Yes, you can choose to submit your report without entering personal information.",
    },
    {
      question: "Who can view my report?",
      answer:
        "Your report is only accessible to authorized university departments.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {/* Display answer if the item is active */}
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <a href="/lost-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default FAQPage;
