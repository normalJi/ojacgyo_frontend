import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className='rounded-lg' key={index}>
                    <img src={image.src} alt={image.alt} className='rounded-lg' />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;