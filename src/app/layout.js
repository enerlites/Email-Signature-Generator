import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Email Signature Generator",
  description: "Generate professional email signatures easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
