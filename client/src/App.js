import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HairTip from './components/HairTip';
import Home from './views/Home';

function App() {
	return (
		<div>
			{/* <!-- Add your site or application content here --> */}

			{/* <!--header area start--> */}
			<Navbar />
			<HairTip />
			{/* <!--header area end--> */}

			<Switch>
				<Route exact path="/" render={() => <Home />} />
			</Switch>

			{/* <!--footer area start--> */}
			<Footer />
			{/* <!--footer area end--> */}

			{/* <!-- modal area start -->  */}
			<div className="modal fade" id="modal_box" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal_body">
							<div className="container">
								<div className="row">
									<div className="col-lg-5 col-md-5 col-sm-12">
										<div className="modal_tab">
											<div className="tab-content  product-details-large">
												<div className="tab-pane fade show active" id="tab1" role="tabpanel" >
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart4.jpg" alt="Stuff" /></a>
													</div>
												</div>
												<div className="tab-pane fade" id="tab2" role="tabpanel">
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart3.jpg" alt="Stuff" /></a>
													</div>
												</div>
												<div className="tab-pane fade" id="tab3" role="tabpanel">
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart5.jpg" alt="Stuff" /></a>
													</div>
												</div>
											</div>
											<div className="modal_tab_button">
												<ul className="nav product_navactive owl-carousel" role="tablist">
													<li >
														<a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/cart/cart4.jpg" alt="Stuff" /></a>
													</li>
													<li>
														<a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/cart/cart3.jpg" alt="Stuff" /></a>
													</li>
													<li>
														<a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/cart/cart5.jpg" alt="Stuff" /></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-lg-7 col-md-7 col-sm-12">
										<div className="modal_right">
											<div className="modal_title mb-10">
												<h2>Handbag feugiat</h2>
											</div>
											<div className="modal_price mb-10">
												<span className="new_price">$64.99</span>
												<span className="old_price" >$78.99</span>
											</div>
											<div className="modal_content mb-10">
												<p>Short-sleeved blouse with feminine draped sleeve detail.</p>
											</div>
											<div className="modal_size mb-15">
												<h2>size</h2>
												<ul>
													<li><a href="index.html">s</a></li>
													<li><a href="index.html">m</a></li>
													<li><a href="index.html">l</a></li>
													<li><a href="index.html">xl</a></li>
													<li><a href="index.html">xxl</a></li>
												</ul>
											</div>
											<div className="modal_add_to_cart mb-15">
												<form action="#">
													<input min="0" max="100" step="2" defaultValue="1" type="number" />
													<button type="submit">add to cart</button>
												</form>
											</div>
											<div className="modal_description mb-15">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
											</div>
											<div className="modal_social">
												<h2>Share this product</h2>
												<ul>
													<li><a href="index.html"><i className="fa fa-facebook"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-twitter"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-pinterest"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-google-plus"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-linkedin"></i> </a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- modal area end -->  */}
		</div>
	);
}

export default App;
