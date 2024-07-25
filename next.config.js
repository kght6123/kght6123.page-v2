const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  readingTime: true
})
 
module.exports = withNextra({
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  reactStrictMode: true,
  cleanDistDir: true
});

// module.exports = withNextra({
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// })
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })