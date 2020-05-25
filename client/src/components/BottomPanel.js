import React, { Component } from 'react'

export default class BottomPanel extends Component {
    render() {
        return (
            <div id="bottom-panel">
                <div className="bottom-panel-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">

                                {/* <!-- BOTTOM TEXT : begin --> */}
                                <div className="bottom-text various-content">

                                    <h3>About ComeCeCeMe</h3>
                                    <p><strong>COMECECEME</strong> is an ideal template for <strong>beauty salon, hairdressers, wellness or spa</strong>. Clean code and top-notch web design techniques are wrapped with <strong>several gorgeous color schemes</strong> to choose from.</p><p>You can buy this responsive HTML5/CSS3 template on <a href="https://themeforest.net/user/lsvrthemes/portfolio?ref=LSVRthemes">ThemeForest</a>.</p>

                                </div>
                                {/* <!-- BOTTOM TEXT : end --> */}

                            </div>
                            <div className="col-md-6">

                                {/* <!-- BOTTOM SUBSCRIBE : begin --> */}
                                <div className="bottom-subscribe various-content">

                                    <h3>Newsletter</h3>
                                    <p>COMECECEME supports MailChimp integration.</p>
                                    <form id="subscribe-form" action="http://lsvr.us14.list-manage.com/subscribe/post-json?u=8291218baaf54ddfd7dbc6016&amp;id=f3e5d696dc&amp;c=?" method="get">

                                        {/* <!-- VALIDATION ERROR MESSAGE : begin --> */}
                                        <p style={{ "display": "none" }} className="c-alert-message m-warning m-validation-error"><i className="ico fa fa-exclamation-circle"></i>Email address is required.</p>
                                        {/* <!-- VALIDATION ERROR MESSAGE : end --> */}

                                        {/* <!-- SENDING REQUEST ERROR MESSAGE : begin --> */}
                                        <p style={{ "display": "none" }} className="c-alert-message m-warning m-request-error"><i className="ico fa fa-exclamation-circle"></i>There was a connection problem. Try again later.</p>
                                        {/* <!-- SENDING REQUEST ERROR MESSAGE : end --> */}

                                        {/* <!-- SUCCESS MESSAGE : begin --> */}
                                        <p style={{ "display": "none" }} className="c-alert-message m-success"><i className="ico fa fa-check-circle"></i><strong>Sent successfully.</strong></p>
                                        {/* <!-- SUCCESS MESSAGE : end --> */}

                                        <div className="form-fields">
                                            <input className="m-required m-email" name="EMAIL" type="text" data-placeholder="Your email address" title="Your email address" />
                                            <button className="c-button submit-btn" type="submit" data-label="Subscribe" data-loading-label="Sending...">Subscribe</button>
                                        </div>
                                    </form>

                                </div>
                                {/* <!-- BOTTOM SUBSCRIBE : end --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
