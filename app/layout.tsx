import './globals.css'

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className="font-bold bg-red-300 h-[100vh] w-[100vw]">
        <div>Root Layout</div>
        {children}</body>
    </html>
  )
}
