import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
    {
        question: 'How can I order?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, beatae.',
    },
    {
        question: ' What are ways of paying?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, beatae.',
    },
    {
        question: 'How can I follow through my order?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, beatae.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const itemStyle = {
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    };

    const questionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    };

    const answerStyle = {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px',
    };

    return (
        <>
        <header className="header shadow header-fixed border-0">
        <div className="container">
            <div className="header-content">
                <div className="left-content">
                    <Link to="/profile" className="back-btn">
                        <i className="icon feather icon-chevron-left"></i>
                    </Link>
                    <h6 className="title">Help center</h6>
                </div>
                <div className="mid-content">
                </div>
                <div className="right-content">
                    <a href="search.html" className="search-icon">
                        <i className="icon feather icon-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>

        <div style={containerStyle}>
            <h2> FAQ</h2>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    style={itemStyle}
                    onClick={() => toggleAnswer(index)}
                >
                    <div style={questionStyle}>
                        <p>{item.question}</p>
                        <span>{openIndex === index ? '🔽' : '▶️'}</span>
                    </div>
                    {openIndex === index && <div style={answerStyle}>{item.answer}</div>}
                </div>
            ))}
        </div>
    </>
    );
};

export default FAQ;
