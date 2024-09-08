import { FiArrowRight, FiCalendar } from "react-icons/fi";
import Slider from "react-slick";
import moment from "moment";
import Link from "next/link";

const ArticleLayout = ({ title, blogs }) => {
  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY");
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="container mx-auto mt-12 lg:mt-[100px] lg:px-4">
      {blogs[0]?.title ? (
        <div className="text-2xl lg:text-4xl text-center flex flex-col items-center mb-5">
          <h3 className="font-nunito font-bold">{title}</h3>
          <span className="bg-primary rounded my-2 w-32 h-1" />
        </div>
      ) : null}

      <div className="flex-wrap justify-center items-center self-center md:flex hidden">
        {blogs &&
          blogs.map((article, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="max-w-sm border-1 rounded-lg overflow-hidden border border-primary/40 shadow-md p-4">
                <div className="p-1">
                  <Link href={`/blogs/${article.url}/${article.id}`}>
                    <img
                      src={`/api/image/${article.thumbnail_image}`}
                      alt={article.title}
                      className="w-full"
                    />
                  </Link>

                  <p className="text-gray-500 text-sm flex gap-2 items-center my-2">
                    <FiCalendar />
                    {article.created_at && formatDate(article.created_at)}
                  </p>
                  <Link href={`/blogs/${article.url}/${article.id}`}>
                    <div
                      className="text-gray-500 text-xl mb-2 line-clamp-3 "
                      style={{ height: "75px" }}
                    >
                      {article.title}
                    </div>
                  </Link>
                  <Link
                    className="w-max items-center gap-1 text-primary flex font-bold py-2"
                    href={`/blogs/${article.url}/${article.id}`}
                  >
                    Read Full Article
                    <FiArrowRight fontSize={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Slider {...settings} className="block md:hidden">
        {blogs &&
          blogs.map((article, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="mx-auto border-1 rounded-lg overflow-hidden border border-primary/40 shadow-md p-4">
                <Link href={`/blogs/${article.url}/${article.id}`}>
                  <img
                    src={`/api/image/${article.thumbnail_image}`}
                    alt={article.title}
                    className="w-full"
                  />
                </Link>
                <p className="text-gray-500 text-sm flex gap-2 items-center my-2">
                  <FiCalendar />
                  {article.created_at && formatDate(article.created_at)}
                </p>
                <Link href={`/blogs/${article.url}/${article.id}`}>
                  <div
                    className="text-gray-500 text-sm mb-2 line-clamp-3 "
                    style={{ height: "55px" }}
                  >
                    {article.title}
                  </div>
                </Link>
                <Link
                  className="items-center text-sm gap-1 text-primary flex font-bold py-2"
                  href={`/blogs/${article.url}/${article.id}`}
                >
                  Read Full Article
                  <FiArrowRight fontSize={20} />
                </Link>
              </div>
            </div>
          ))}
      </Slider>
      <div className="w-full text-center mt-8 text-primary">
        <Link href={"/blogs"}>
          <button className="border-2 bg-primary text-white transform duration-300 border-primary py-2 lg:py-3 px-8 rounded font-bold tracking-wide lg:text-lg">
            View All Blogs
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ArticleLayout;
