import { type AppType } from 'next/app'
import '~/styles/globals.css'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'

import { api } from '~/utils/api'

import Navbar from '~/components/navbar'
import Footer from '~/components/footer'

const publicPages = [
  '/sign-in/[[...index]]',
  '/sign-up/[[...index]]',
  '/',
  '/pricing',
  '/faq',
  '/creator',
]

const MyApp: AppType = ({ Component, pageProps }) => {
  // Get the pathname
  const { pathname } = useRouter()

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname)

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class">
        <Head>
          <title>InstaCapt</title>
          <meta
            name="description"
            content="Create your captions and hashtags for your social media"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.cdnfonts.com/css/billabong"
          />
          <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
          />
        </Head>
        <Navbar />

        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}

        <Footer />
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
