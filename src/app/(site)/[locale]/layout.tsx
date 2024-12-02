import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}, {locale: 'fr'}];
}
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  let messages;
  try {
    messages = (await import(`../../../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <main id="main" className="flex flex-nowrap font-satoshi overflow-visible flex-col items-center justify-start dark:bg-black bg-[#ffffff]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </main>
    </html>
  );
}