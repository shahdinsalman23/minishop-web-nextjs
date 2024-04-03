"use client";
import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
      };

    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending items",
            mainTitle: "WOMAN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "WOMAN'S LATEST FASHION SALE",
            price: "$15",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ]


  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((items) => (
                <Slide 
                key={items.id}
                img={items.img} 
                title={items.title}
                mainTitle={items.mainTitle}
                price={items.price} 
                />
                ))}
            </Slider>
        </div>
     </div>
  )
}

export default Hero
