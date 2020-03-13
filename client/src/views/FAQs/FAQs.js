import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FAQs extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div className="breadcrumb-section cart_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li className="active"> Frequently Questions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}
                {/* <!--faq area start--> */}
                <div className="faq_content_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="faq_content_wrapper">
                                    <h4>Below are frequently asked questions, you may find the answer for yourself</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Accordion area--> */}
                <div className="accordion_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div id="accordion" className="card__accordion">
                                    <div className="card card_dipult">
                                        <div className="card-header card_accor" id="headingOne">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Mauris congue euismod purus at semper. Morbi et vulputate massa?

                                  <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>

                                            </button>

                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingTwo">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Donec mattis finibus elit ut tristique?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>

                                            </button>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingThree">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Aenean elit orci, efficitur quis nisl at, accumsan?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingfour">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                Pellentesque habitant morbi tristique senectus et netus?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapseeight" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingfive">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                Nam pellentesque aliquam metus?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapseseven" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingsix">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                Aenean elit orci, efficitur quis nisl at?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingseven">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                Morbi gravida, nisi id fringilla ultricies, elit lorem?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingseven" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card  card_dipult">
                                        <div className="card-header card_accor" id="headingeight">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                Aenean elit orci, efficitur quis nisl at, accumsan?
                                   <i className="fa fa-plus"></i>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div id="collapsesix" className="collapse" aria-labelledby="headingeight" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Accordion area end--> */}
                {/* <!--faq area end--> */}
            </div>
        )
    }
}
