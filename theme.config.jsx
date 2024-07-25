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
    </>
  ),
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