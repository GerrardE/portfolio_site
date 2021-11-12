import React from "react";
import Helmet from "react-helmet";

const Seo = (props) => {
  const { 
    description = "Articles, tips and tricks to help you on your path to becoming a world-class Software Engineer.", 
    url = `${process.ENV.GATSBY_BASE_URL}/blog`,
    title = "Ezeugwa Gerrard", 
    image = "https://res.cloudinary.com/dz9mitahp/image/upload/v1635609775/small_ezeugwagerrard_f0a822c23e.jpg?7751481.100000024",
    keywords = "Ezeugwa Gerrard's Personal Blog"
} = props.seo;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ezeugwagerrard" />
      <meta name="icon" href="https://res.cloudinary.com/dz9mitahp/image/upload/v1636657770/ezeugwa_gerrard_logo_white_2cd8981d27.svg" />

      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />

      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ezeugwagerrard" />
      <meta name="twitter:site" content="@ezeugwagerrard" />
      <meta name="twitter:image:src" content={image} />
    </Helmet>
  );
};

export default Seo;
