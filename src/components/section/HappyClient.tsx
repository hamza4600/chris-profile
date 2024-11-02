import React from 'react';

const HappyClient: React.FC = () => {
  const avatars = [
    {
      src: "https://framerusercontent.com/images/jT8JEDUL0r0ZTJ5sXKEgqXxmU.jpg",
      alt: "Client 1"
    },
    {
      src: "https://framerusercontent.com/images/cOuxfQBnoLuVovLZXpfqtZGwY.jpg",
      alt: "Client 2"
    },
    {
      src: "https://framerusercontent.com/images/aDtE3OizHT7ZTfAIIitzJnbvc.jpg",
      alt: "Client 3"
    },
    {
      src: "https://framerusercontent.com/images/1ZiNllOUv0sM2mv68Xrr4VbiAio.jpg",
      alt: "Client 4"
    }
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white"
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="w-full h-full object-cover"
              decoding="async"
              />
          </div>
        ))}
      </div>
      <p className="font-light text-[16px] dark:text-primary text-quaternary">15+ happy clients</p>
    </div>
  );
};

export default HappyClient;