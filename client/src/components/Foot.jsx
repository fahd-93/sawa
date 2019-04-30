import React from 'react';

const Foot = () => {
    return (

        <section className="footer-container">
            <div className="flex-container">
                <ul className="component-flex">
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>Home</a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>About</a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>How it works</a></li>
                </ul>

                <ul className="component-flex social">
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-google-plus"></i></a></li>
                    <li className="list-inline-item"><a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </section>

    )
};

export default Foot;