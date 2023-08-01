import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
