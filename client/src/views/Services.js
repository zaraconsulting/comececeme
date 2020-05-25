import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Services extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
                <div id="core" className="core-bg-1">

                    {/* <!-- PAGE HEADER : begin --> */}
                    <div id="page-header">
                        <div className="container">
                            <h1>Services</h1>
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">Salon</Link></li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- PAGE HEADER : begin --> */}

                    <div className="container">

                        {/* <!-- PAGE CONTENT : begin --> */}
                        <div id="page-content">
                            <div className="various-content">

                                {/* <!-- CATEGORY SECTION : begin --> */}
                                <section id="cosmetics">

                                    <h2>Cosmetics</h2>

                                    <div className="row">
                                        <div className="col-sm-2">

                                            {/* <!-- CATEGORY IMAGE : begin --> */}
                                            <p className="textalign-center margin-sides-auto max-width-180"><img src="images/service_01.jpg" className="rounded" alt="Cosmetics" /></p>
                                            {/* <!-- CATEGORY IMAGE : end --> */}

                                        </div>
                                        <div className="col-sm-10">

                                            {/* <!-- SERVICES : begin --> */}
                                            <ul className="c-accordion">
                                                <li className="m-has-price">
                                                    <h3 className="accordion-title">Facials</h3>
                                                    <p className="accordion-price">from $4.99</p>
                                                    <div className="accordion-content">
                                                        <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td><strong>Sed consequat</strong><br />Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</td>
                                                                    <td className="textalign-right">$7.99</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><strong>Duis arcu tortor</strong><br />Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</td>
                                                                    <td className="textalign-right">$14.99</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Eyebrow &amp; Eyelashes</h3>
                                                    <p className="accordion-price">
                                                        <span className="strikethrough">$10.50</span>
                                                        <span className="sale-price">$6.99</span>
                                                    </p>
                                                    <div className="accordion-content">
                                                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Microdermabrasion</h3>
                                                    <p className="accordion-price">$19.99</p>
                                                    <div className="accordion-content">
                                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Acne Treatments</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- SERVICES : end --> */}

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- CATEGORY SECTION : end --> */}

                                {/* <!-- CATEGORY SECTION : begin --> */}
                                <section id="hairdressing">

                                    <h2>Hairdressing</h2>

                                    <div className="row">
                                        <div className="col-sm-2">

                                            {/* <!-- CATEGORY IMAGE : begin --> */}
                                            <p className="textalign-center margin-sides-auto max-width-180"><img src="images/service_02.jpg" className="rounded" alt="Hairdressing" /></p>
                                            {/* <!-- CATEGORY IMAGE : end --> */}

                                        </div>
                                        <div className="col-sm-10">

                                            {/* <!-- SERVICES : begin --> */}
                                            <ul className="c-accordion">
                                                <li>
                                                    <h3 className="accordion-title">Wash</h3>
                                                    <p className="accordion-price">$10.50</p>
                                                    <div className="accordion-content">
                                                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Cut & Finish</h3>
                                                    <p className="accordion-price">$19.99</p>
                                                    <div className="accordion-content">
                                                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Blow Dries</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Hair Colouring & Highlights</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Evening Hairdressing</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- SERVICES : end --> */}

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- CATEGORY SECTION : end --> */}

                                {/* <!-- CATEGORY SECTION : begin --> */}
                                <section id="body-treatments">

                                    <h2>Body Treatments</h2>

                                    <div className="row">
                                        <div className="col-sm-2">

                                            {/* <!-- CATEGORY IMAGE : begin --> */}
                                            <p className="textalign-center margin-sides-auto max-width-180"><img src="images/service_03.jpg" className="rounded" alt="Body Treatments" /></p>
                                            {/* <!-- CATEGORY IMAGE : end --> */}

                                        </div>
                                        <div className="col-sm-10">

                                            {/* <!-- SERVICES : begin --> */}
                                            <ul className="c-accordion">
                                                <li>
                                                    <h3 className="accordion-title">Body Wraps</h3>
                                                    <p className="accordion-price">$10.50</p>
                                                    <div className="accordion-content">
                                                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Body Exfoliation Treatments</h3>
                                                    <p className="accordion-price">$19.99</p>
                                                    <div className="accordion-content">
                                                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Cellulite Treatments</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Lipo Laser</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Depilation</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- SERVICES : end --> */}

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- CATEGORY SECTION : end --> */}

                                {/* <!-- CATEGORY SECTION : begin --> */}
                                <section id="massages">

                                    <h2>Massages</h2>

                                    <div className="row">
                                        <div className="col-sm-2">

                                            {/* <!-- CATEGORY IMAGE : begin --> */}
                                            <p className="textalign-center margin-sides-auto max-width-180"><img src="images/service_04.jpg" className="rounded" alt="Massages" /></p>
                                            {/* <!-- CATEGORY IMAGE : end --> */}

                                        </div>
                                        <div className="col-sm-10">

                                            {/* <!-- SERVICES : begin --> */}
                                            <ul className="c-accordion">
                                                <li>
                                                    <h3 className="accordion-title">Aromatherapy Massage</h3>
                                                    <p className="accordion-price">$10.50</p>
                                                    <div className="accordion-content">
                                                        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Exotic Massages</h3>
                                                    <p className="accordion-price">$19.99</p>
                                                    <div className="accordion-content">
                                                        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Swedish Massage</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Hot Stone Massage</h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h3 className="accordion-title">Sports Massage </h3>
                                                    <p className="accordion-price">$14.99</p>
                                                    <div className="accordion-content">
                                                        <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- SERVICES : end --> */}

                                        </div>
                                    </div>

                                </section>
                                {/* <!-- CATEGORY SECTION : end --> */}

                                {/* <!-- CTA MESSAGE SECTION : begin --> */}
                                <section>

                                    {/* <!-- CTA MESSAGE : begin --> */}
                                    <div className="c-cta-message">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h2>Did you find a service for you?</h2>
                                                <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="textalign-right">
                                                    <a href="ajax/reservation-form.html" className="c-button m-open-ajax-modal">Make a Reservation</a>
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
