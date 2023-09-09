import "./globals.scss";
import type { Metadata } from 'next'
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata: Metadata = {
  title: 'Weather Now',
  description: 'Weather Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="dns-prefetch" href="https://geocode-maps.yandex.ru/1.x" />
        <link rel="preconnect" href="https://api.weatherapi.com/v1" />
      </head>

      <body>{children}</body>
    </html>
  )
}
