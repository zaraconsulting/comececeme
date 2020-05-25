import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import BottomPanel from './components/BottomPanel';
import Footer from './components/Footer';
import About from './views/About';
import Gallery from './views/Gallery';
import Services from './views/Services';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Cart from './views/Cart';

function App() {
	return (
		<div>
			{/* <!-- Add your site or application content here --> */}


			{/* <!-- HEADER : begin --> */}
			<Header />
			{/* <!-- HEADER : end --> */}

			{/* <!-- WRAPPER : begin --> */}
			<div id="wrapper">
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/about-us" render={() => <About />} />
					<Route path="/gallery" render={() => <Gallery />} />
					<Route path="/services" render={() => <Services />} />
					<Route path="/shop/products" render={() => <Shop />} />
					<Route path="/shop/cart" render={() => <Cart />} />
					<Route path="/contact" render={() => <Contact />} />
				</Switch>


				{/* <!-- BOTTOM PANEL : begin --> */}
				<BottomPanel />
				{/* <!-- BOTTOM PANEL : end --> */}

				{/* <!-- FOOTER : begin --> */}
				<Footer />
				{/* <!-- FOOTER : end --> */}

			</div>
			{/* <!-- WRAPPER : end --> */}

		</div>
	);
}

export default App;
