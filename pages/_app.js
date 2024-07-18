import 'nextra-theme-blog/style.css'
import Head from 'next/head'
// import localFont from 'next/font/local'

import '../styles/main.css'

// const mPlusRounded1c = localFont({
//   src: [
//     {
//       path: '../public/fonts/MPLUSRounded1c-Thin.woff2',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-Light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-ExtraBold.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/MPLUSRounded1c-Black.woff2',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
// })

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        {/* <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MPLUSRounded1c-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
        {/* <style jsx global>{`
          html {
            font-family: ${mPlusRounded1c.style.fontFamily};
            -webkit-font-smoothing: subpixel-antialiased;
            font-feature-settings: 'case' 1, 'cpsp' 1, 'dlig' 1, 'cv01' 1, 'cv02',
              'cv03' 1, 'cv04' 1;
            font-variation-settings: 'wght' 400;
            font-variant: common-ligatures contextual;
            letter-spacing: -0.02em;
          }
          b,
          strong,
          h3,
          h4,
          h5,
          h6 {
            font-variation-settings: 'wght' 500;
          }
          h1 {
            font-variation-settings: 'wght' 800;
          }
          h2 {
            font-variation-settings: 'wght' 700;
          }

          @media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }

          details summary {
            cursor: pointer;
          }

          img.next-image {
            margin: 0;
          }

          .prose a {
            color: #0074de;
          }

          .nav-line .nav-link {
            color: #69778c;
          }
        `}</style> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
