import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../data/constants';

export default function SEO({ title, description, url = '/', noindex = false }) {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const fullUrl = `https://www.industrialmanufacturer.in${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || COMPANY.shortDescription} />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || COMPANY.shortDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || COMPANY.shortDescription} />
    </Helmet>
  );
}
