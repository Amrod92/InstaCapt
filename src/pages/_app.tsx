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

import { api } from '~/utils/api'

import Navbar from '~/components/navbar'

const publicPages = ['/sign-in/[[...index]]', '/sign-up/[[...index]]', '/']

const MyApp: AppType = ({ Component, pageProps }) => {
  // Get the pathname
  const { pathname } = useRouter()

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname)

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/billabong"
        />
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
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
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
