import { ConvexClientProvider } from "./_provider/ConvexClientProvider";
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
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:wght@400..800&family=Julius+Sans+One&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased bg-soft`}
      >
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
