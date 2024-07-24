import 'tailwindcss/tailwind.css'
import '../styles/fonts.css'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const queryClient = new QueryClient()

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {' '}
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
        {draftMode && <VisualEditing />}
      </QueryClientProvider>
    </>
  )
}
