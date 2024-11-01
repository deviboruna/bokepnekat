import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot`,
    metadataBase: new URL("https://bokepnekat.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'KWr-poyXowklXg7IOCW6MHlWwx-O7ool_tBkiwobbco',
        yandex: '63cecb3c9e4df47c',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot`,
        "logo": "https://bokepnekat.pages.dev/favicon.ico",
        "url": "https://bokepnekat.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepnekat.pages.dev"
            },
            "foundingDate":"2024-10-30"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "url": "https://bokepnekat.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot`,
        "image": "https://bokepnekat.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bokepnekat.pages.dev"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepnekat.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepnekat.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
