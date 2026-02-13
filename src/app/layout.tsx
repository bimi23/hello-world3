export const metadata = {
  title: 'Hello World 3',
  description: 'A simple Hello World Next.js app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
