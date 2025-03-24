'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
			<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16539037059"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16539037059');
          `,
        }} />
		</ThemeProvider>
	);
}