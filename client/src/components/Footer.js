import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">

                    {/* <!-- FOOTER TWITTER : begin --> */}
                    <div className="footer-twitter m-paginated" data-id="LSVRthemes" data-limit="3" data-interval="12000">
                        <div className="footer-twitter-inner">
                            <i className="ico fa fa-twitter"></i>
                            <h4 className="twitter-title"><a href="https://twitter.com/comececeme">@ComeCeCeMe</a></h4>
                            <div className="twitter-feed">
                                <span className="c-loading-anim"><span></span></span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- FOOTER TWITTER : end --> */}

                    {/* <!-- FOOTER BOTTOM : begin --> */}
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-md-6 col-md-push-6">

                                {/* <!-- FOOTER MENU : begin --> */}
                                <nav className="footer-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="documentation.html">Documentation</a></li>
                                    </ul>
                                </nav>
                                {/* <!-- FOOTER MENU : end --> */}

                            </div>
                            <div className="col-md-6 col-md-pull-6">

                                {/* <!-- FOOTER TEXT : begin --> */}
                                <div className="footer-text">
                                    <p>Website built by <a href="http://zaraconsulting.org">Zara Consulting</a></p>
                                </div>
                                {/* <!-- FOOTER TEXT : end --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!-- FOOTER BOTTOM : end --> */}

                </div>
            </footer>
        )
    }
}
