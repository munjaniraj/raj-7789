import Image from "next/image";
import Slider from "react-slick";

const PortfolioSlider = ({ PortfolioData }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  };

  const data = [
    {
      id: 1,
      imgUrl: PortfolioData.SIGILFINANCE,
    },
    {
      id: 2,
      imgUrl: PortfolioData.tinyChef,
    },
    {
      id: 3,
      imgUrl: PortfolioData.wajooba,
    },
    {
      id: 4,
      imgUrl: PortfolioData.SIGILFINANCE,
    },
    {
      id: 5,
      imgUrl: PortfolioData.tinyChef,
    },
    {
      id: 6,
      imgUrl: PortfolioData.wajooba,
    },
  ];

  return (
    <div className="center-mode-carousel mt-8 HelpBusiness">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} id={index} className="carousel-item p-10 ">
            <Image src={item.imgUrl} alt="Portfolio" className="rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioSlider;
