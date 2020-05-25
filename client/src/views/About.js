import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
                <div id="core" className="core-bg-1">

                    {/* <!-- PAGE HEADER : begin --> */}
                    <div id="page-header">
                        <div className="container">
                            <h1>About Us</h1>
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">Salon</Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- PAGE HEADER : begin --> */}

                    <div className="container">

                        {/* <!-- PAGE CONTENT : begin --> */}
                        <div id="page-content">
                            <div className="various-content">

                                {/* <!-- INTRO SECTION : begin --> */}
                                <section>

                                    <div className="row">
                                        <div className="col-sm-6">

                                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
                                            <p><strong>The copy warned the Little Blind Text</strong>, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind.</p>

                                        </div>
                                        <div className="col-sm-6">

                                            <p><img src="images/about_us.jpg" alt="" /></p>

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- INTRO SECTION : end --> */}

                                {/* <!-- TEAM SECTION : begin --> */}
                                <section>

                                    <h2>Our Beauticians</h2>

                                    <div className="row">
                                        <div className="col-sm-6">

                                            {/* <!-- TEAM MEMBER : begin --> */}
                                            <div className="c-team-member m-has-portrait">
                                                <div className="member-inner">
                                                    <p className="member-portrait"><span><img src="images/team_member_01.jpg" alt="" /></span></p>
                                                    <h4 className="member-name">Nikki Mars</h4>
                                                    <h3 className="member-role">Cosmetician</h3>
                                                    <div className="member-description">
                                                        <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. </p>
                                                    </div>
                                                    <ul className="member-social">
                                                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- TEAM MEMBER : end --> */}

                                        </div>
                                        <div className="col-sm-6">

                                            {/* <!-- TEAM MEMBER : begin --> */}
                                            <div className="c-team-member m-has-portrait">
                                                <div className="member-inner">
                                                    <p className="member-portrait"><span><img src="images/team_member_02.jpg" alt="" /></span></p>
                                                    <h4 className="member-name">Angela Simons</h4>
                                                    <h3 className="member-role">Hair Dresser</h3>
                                                    <div className="member-description">
                                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat.</p>
                                                    </div>
                                                    <ul className="member-social">
                                                        <li><a href="/"><i className="fa fa-pinterest"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- TEAM MEMBER : end --> */}

                                        </div>
                                    </div>

                                    <hr className="c-divider m-transparent m-x-small display-none-sm" />

                                    <div className="row">
                                        <div className="col-sm-6">

                                            {/* <!-- TEAM MEMBER : begin --> */}
                                            <div className="c-team-member m-has-portrait">
                                                <div className="member-inner">
                                                    <p className="member-portrait"><span><img src="images/team_member_03.jpg" alt="" /></span></p>
                                                    <h4 className="member-name">Tarja Lee</h4>
                                                    <h3 className="member-role">Nail Artist</h3>
                                                    <div className="member-description">
                                                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio.</p>
                                                    </div>
                                                    <ul className="member-social">
                                                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- TEAM MEMBER : end --> */}

                                        </div>
                                        <div className="col-sm-6">

                                            {/* <!-- TEAM MEMBER : begin --> */}
                                            <div className="c-team-member m-has-portrait">
                                                <div className="member-inner">
                                                    <p className="member-portrait"><span><img src="images/team_member_04.jpg" alt="" /></span></p>
                                                    <h4 className="member-name">Floor Gossow</h4>
                                                    <h3 className="member-role">Massage Therapist</h3>
                                                    <div className="member-description">
                                                        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat.</p>
                                                    </div>
                                                    <ul className="member-social">
                                                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="/"><i className="fa fa-pinterest"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- TEAM MEMBER : end --> */}

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- TEAM SECTION : end --> */}

                                {/* <!-- CTA MESSAGE SECTION : begin --> */}
                                <section>

                                    {/* <!-- CTA MESSAGE : begin --> */}
                                    <div className="c-cta-message">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2>Visit the best beauty salon around!</h2>
                                                <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="textalign-right">
                                                    <a href="contact.html" className="c-button">Contact Info</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- CTA MESSAGE : end --> */}

                                </section>
                                {/* <!-- CTA MESSAGE SECTION : end --> */}

                            </div>
                        </div>
                        {/* <!-- PAGE CONTENT : end --> */}

                    </div>

                </div>
                {/* <!-- CORE : end --> */}
            </div>
        )
    }
}
