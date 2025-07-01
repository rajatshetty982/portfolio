import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeProvider';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="page-wrapper">
            <Navbar />
            <main className="container">{children}</main>
            <footer className="footer">
              © {new Date().getFullYear()} Rajat Shetty
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
