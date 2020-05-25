import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
			<div id="core">

				{/* <!-- PAGE HEADER : begin --> */}
				<div id="page-header">
					<div className="container">
						<h1>Contact</h1>
						<ul className="breadcrumbs">
							<li><Link to="/">Home</Link></li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
				{/* <!-- PAGE HEADER : begin --> */}

				<div className="container">

					{/* <!-- PAGE CONTENT : begin --> */}
					<div id="page-content">
						<div className="various-content">

							{/* <!-- ADDRESS SECTION : begin --> */}
							<section>

								<h2>Where you can find us</h2>

								<div className="row">
									<div className="col-lg-8">

										{/* <!-- MAP : begin --> */}
										<div className="c-map">
											<iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sunset+Boulevard,+Los+Angeles,+CA,+United+States&amp;aq=0&amp;oq=sunset+boul&amp;sll=37.0625,-95.677068&amp;sspn=61.323728,135.263672&amp;ie=UTF8&amp;hq=&amp;hnear=Sunset+Blvd,+Los+Angeles&amp;ll=34.080988,-118.412647&amp;spn=0.003985,0.008256&amp;t=m&amp;z=14&amp;output=embed"></iframe>
										</div>
										{/* <!-- MAP : end --> */}

									</div>
									<div className="col-lg-4">

										<p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in.</p>

										{/* <!-- ICON BLOCK : begin --> */}
										<div className="c-icon-block">
											<i className="ico fa fa-map-marker"></i>
											<div className="icon-block-inner">
												<p>
													<strong>BEAUTYSPOT</strong><br />
													9015 Sunset Boulevard<br />
													Ca 90069
												</p>
											</div>
										</div>
										{/* <!-- ICON BLOCK : end --> */}

										{/* <!-- ICON BLOCK : begin --> */}
										<div className="c-icon-block">
											<i className="ico fa fa-clock-o"></i>
											<div className="icon-block-inner">
												<dl>
													<dt>Mo. - Fr.:</dt>
													<dd>10:00 - 16:00</dd>
													<dt>Sa.:</dt>
													<dd>10:00 - 14:00</dd>
													<dt>Su.:</dt>
													<dd>Closed</dd>
												</dl>
											</div>
										</div>
										{/* <!-- ICON BLOCK : end --> */}

									</div>
								</div>

							</section>
							{/* <!-- ADDRESS SECTION : end --> */}

							{/* <!-- FORM SECTION : begin --> */}
							<section>

								<h2>Send us a message</h2>

								<div className="row">
									<div className="col-lg-8">

										{/* <!-- CONTACT FORM : begin --> */}
										<form id="contact-form" className="default-form m-ajax-form" action="ajax/contact-form.php" method="post" >
											<input type="hidden" name="contact-form" />

											{/* <!-- FORM VALIDATION ERROR MESSAGE : begin --> */}
											<p className="c-alert-message m-warning m-validation-error" style={{"display": "none"}}><i className="ico fa fa-exclamation-circle"></i>Please fill in all required (*) fields.</p>
											{/* <!-- FORM VALIDATION ERROR MESSAGE : end --> */}

											{/* <!-- SENDING REQUEST ERROR MESSAGE : begin --> */}
											<p className="c-alert-message m-warning m-request-error" style={{"display": "none"}}><i className="ico fa fa-exclamation-circle"></i>There was a connection problem. Try again later.</p>
											{/* <!-- SENDING REQUEST ERROR MESSAGE : end --> */}

											<div className="row">
												<div className="col-sm-6">

													{/* <!-- NAME FIELD : begin --> */}
													<div className="form-field">
														<label htmlFor="contact-name">Your Name <span>*</span></label>
														<input id="contact-name" name="contact-name" className="m-required" />
													</div>
													{/* <!-- NAME FIELD : end --> */}

													{/* <!-- EMAIL FIELD : begin --> */}
													<div className="form-field">
														<label htmlFor="contact-email">Your Email Address <span>*</span></label>
														<input id="contact-email" name="contact-email" className="m-required m-email" />
													</div>
													<p style={{"display": "none"}}>
														<label htmlFor="contact-email-hp">Re Email Address</label>
														<input id="contact-email-hp" name="contact-email-hp" />
													</p>
													{/* <!-- EMAIL FIELD : end --> */}

													{/* <!-- PHONE FIELD : begin --> */}
													<div className="form-field">
														<label htmlFor="contact-phone">Your Phone Number</label>
														<input id="contact-phone" name="contact-phone" />
													</div>
													{/* <!-- PHONE FIELD : end --> */}

												</div>
												<div className="col-sm-6">

													{/* <!-- SUBJECT FIELD : begin --> */}
													<div className="form-field">
														<label htmlFor="contact-subject">Message Subject</label>
														<input id="contact-subject" name="contact-subject" />
													</div>
													{/* <!-- SUBJECT FIELD : end --> */}

													{/* <!-- MESSAGE FIELD : begin --> */}
													<div className="form-field">
														<label htmlFor="contact-message">Message <span>*</span></label>
														<textarea id="contact-message" name="contact-message" className="m-required"></textarea>
													</div>
													{/* <!-- MESSAGE FIELD : end --> */}

													{/* <!-- SUBMIT BUTTON : begin --> */}
													<div className="form-field">
														<button className="submit-btn c-button" type="submit" data-label="Send Message" data-loading-label="Sending...">Send Message</button>
													</div>
													{/* <!-- SUBMIT BUTTON : end --> */}

												</div>
											</div>

										</form>
										{/* <!-- CONTACT FORM : end --> */}

									</div>
									<div className="col-lg-4">

										{/* <!-- ICON BLOCK : begin --> */}
										<div className="c-icon-block">
											<i className="ico fa fa-info-circle"></i>
											<div className="icon-block-inner">
												<p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
												<p><a href="ajax/reservation-form.html" className="c-button m-type-2 m-open-ajax-modal">Make a Reservation</a></p>
											</div>
										</div>
										{/* <!-- ICON BLOCK : end --> */}

									</div>
								</div>

							</section>
							{/* <!-- FORM SECTION : end --> */}

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
