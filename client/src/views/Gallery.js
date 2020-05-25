import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Gallery extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
                <div id="core">

                    {/* <!-- PAGE HEADER : begin --> */}
                    <div id="page-header">
                        <div className="container">
                            <h1>Gallery</h1>
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">Salon</Link></li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- PAGE HEADER : begin --> */}

                    {/* <!-- PAGE CONTENT : begin --> */}
                    <div id="page-content">
                        <div className="various-content">

                            {/* <!-- GALLERY : begin --> */}
                            <div className="c-gallery">
                                <div className="thumb-list">
                                    <div className="thumb"><Link href="images/gallery_01.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_01.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_02.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_02.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_03.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_03.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_04.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_04.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_06.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_06.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_07.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_07.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_08.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_08.jpg" alt="" /></Link></div>
                                    <div className="thumb"><Link href="images/gallery_05.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/gallery_05.jpg" alt="" /></Link></div>
                                </div>
                            </div>
                            {/* <!-- GALLERY : end --> */}

                            {/* <!-- DESCRIPTION : begin --> */}
                            <div className="container">
                                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            </div>
                            {/* <!-- DESCRIPTION : end --> */}

                        </div>
                    </div>
                    {/* <!-- PAGE CONTENT : end --> */}

                </div>
                {/* <!-- CORE : end --> */}
            </div>
        )
    }
}
