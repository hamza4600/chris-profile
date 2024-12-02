"use client";
import { langSelectorOptions } from "@/constants";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LangSelector() {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = e.target.value;
        // Remove the current locale from pathname
        const newPathname = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
        router.push(`/${selectedLocale}${newPathname}`);
    };

    // Get current locale from URL or default to 'en'
    const currentLocale = pathname.match(/^\/([a-z]{2})(?=\/|$)/)?.[1] || 'en';

    return (
        <select
            className="bg-transparent"
            onChange={handleChange}
            value={currentLocale}
        >
            {langSelectorOptions.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className="bg-transparent"
                    aria-label={option.name}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
}