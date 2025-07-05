import Image from "next/image";

interface ProfessionalAvatarProps {
  imageUrl: string;
  name: string;
  isVerified?: boolean;
  isAvailable?: boolean;
}

const ProfessionalAvatar = ({ 
  imageUrl, 
  name, 
  isVerified = true, 
  isAvailable = true 
}: ProfessionalAvatarProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden relative ring-4 ring-gray-200 dark:ring-gray-700 shadow-xl">
        <Image
          src={imageUrl}
          alt={`${name}'s avatar`}
          className="object-cover object-top"
          fill
          sizes="160px"
          quality={100}
          priority
        />
      </div>
      
      {/* Professional Badge */}
      {isVerified && (
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-full shadow-sm">
          {isAvailable && (
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          )}
          <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
            Verified Expert
          </span>
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProfessionalAvatar; 