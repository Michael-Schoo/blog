import '../styles/globals.css'
import '../styles/scss/style.scss'
import LeftSidebar from '#/components/sidebar/Left'
import { Metadata, Viewport } from 'next'
import config from '#/config'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // lato.variable
  return (
    <html dir="ltr" lang="en-us">
      {/* <style jsx global>{`
        :root {
          --base-font-family: ${lato.style.fontFamily}, var(--sys-font-family), var(--zh-font-family), sans-serif;
        }
      `}</style> */}
      <body style={{ transition: 'background-color 0.3s ease 0s' }} className={lato.className}>
        <div className="container main-container flex on-phone--column extended">
          <LeftSidebar />

          {children}
        </div>
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    absolute: config.title,
  },
  description: config.sidebar.subtitle,
  metadataBase: new URL(config.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: config.title,
    title: {
      template: `%s | ${config.title}`,
      absolute: config.title,
    },
    description: config.sidebar.subtitle,
  },
  twitter: {
    title: {
      template: `%s | ${config.title}`,
      absolute: config.title,
    },
    description: config.sidebar.subtitle,
  },
  generator: `Next.js ${process.env["npm_package_dependencies_next"]}`,
}
