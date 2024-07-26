// import Cusdis from 'nextra-theme-blog/cusdis'

export default {
  // comments: <Cusdis />,
  // components: {
  //   h1: ({ children }) => (
  //     <h1
  //       style={{
  //         WebkitBackgroundClip: 'text',
  //         WebkitTextFillColor: 'transparent',
  //         backgroundClip: 'text',
  //         backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)'
  //       }}
  //     >
  //       {children}
  //     </h1>
  //   )
  // },
  // cusdis: {
  //   appId: 'a2d11511-7012-4254-9483-cb49c8f4dfe8'
  // },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>2024</time> Copyright kght6123.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }s
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <meta
        property="og:image"
        content={`https://placehold.jp/50/000000/ffffff/1200x600.png?text=${title}&css=%7B%22border-radius%22%3A%2215px%22%2C%22background%22%3A%22%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23111111)%2C%20to(%23555555))%22%7D`}
      />
    </>
  ),
  useNextSeoProps: () => ({
    // defaultTitle: "nextra-ogp-sample",
    // titleTemplate: "nextra-ogp-sample",
    // description: "nextra-ogp-sample",
    twitter: {
      handle: "@kght6123",
      site: "@kght6123",
      cardType: "summary_large_image",
    },
    // openGraph: {
    //   url: "https://nextra-ogp-sample.vercel.app",
    //   description: "nextra-ogp-sample",
    // },
  }),
  readMore: 'Read More →',
  dateFormatter: date => `Last updated at ${date.toDateString()}`,
  postFooter: null,
  darkMode: false,
  navs: [
    // {
    //   url: '/privacy-policy',
    //   name: 'Policy'
    // },
  ]
}