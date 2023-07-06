import { Raleway } from "next/font/google";

// Project providers
import MUIProvider from "@/themes/mui.provider";
import ReactQueryProvider from "@/services/queries/react-query/rq.provider";
import ReduxProvider from "@/store/provider";

// Global layout
import Layout from "@/layouts";

// Global css
import "../styles/index.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReduxProvider>
            <MUIProvider>
              <Layout>{children}</Layout>
            </MUIProvider>
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
