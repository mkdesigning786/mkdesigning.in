import { Helmet } from 'react-helmet-async'

function SEO({ title, description, keywords, path = '' }) {
  const siteUrl = 'https://mkdesigning.in'
  const fullUrl = `${siteUrl}/${path}`
  const fullTitle = title ? `${title} | MK Designing` : 'MK Designing | Web Design & Development Agency in Vellore'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
