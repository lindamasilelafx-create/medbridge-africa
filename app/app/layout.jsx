export const metadata = {
  title: 'MedBridge Africa',
  description: 'International Medical Education Consultancy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
