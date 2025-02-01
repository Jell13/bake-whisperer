import "./globals.css";

export const metadata = {
  title: "Bake Whisperer",
  description: "Bake Whisperer - Bakery at your doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased bg-soft`}
      >
        {children}
      </body>
    </html>
  );
}
