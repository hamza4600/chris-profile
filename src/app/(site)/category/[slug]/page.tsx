/* eslint-disable @next/next/no-img-element */

import React from "react";

export interface TravelPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  isMemberOnly?: boolean;
}

const posts: TravelPost[] = [
  {
    id: "1",
    title:
      "Traveller Visiting Ice Cave With Amazing eye catching view with nature",
    description:
      "In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper",
    imageUrl: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
    author: {
      name: "Adrio Devid",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    date: "Aug 24 2023",
    category: "Travel",
  },
  {
    id: "2",
    title:
      "Hidden Gems Unveiled: Off-the-Beaten-Path Adventures Around the Globe",
    description:
      "In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    author: {
      name: "Ryna Kenter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    date: "Aug 24 2023",
    category: "Travel",
  },
  {
    id: "3",
    title:
      "Wanderlust Chronicles: Tales of Exploration and Discovery from Faraway Lands",
    description:
      "In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.",
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    author: {
      name: "Ryna Kenter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    date: "Aug 24 2023",
    category: "Travel",
    isMemberOnly: true,
  },
];

export default function TravelPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] text-[30px[] dark:text-primary text-black text-center font-normal mb-4">Travel</h1>
      <p className="dark:text-secondary text-black md:text-2xl text-[18px] leading-[1.2em] tracking-[-0.5px] text-center mb-8">{posts.length} Posts</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden shadow-lg dark:shadow-[0px_0px_10px_rgba(255,255,255,0.2)]">
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              {post.isMemberOnly && (
                <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Member Only
                </span>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 dark:text-primary text-black">{post.title}</h2>
              <p className="dark:text-secondary text-black font-medium mb-4">{post.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="dark:text-secondary text-gray-700">{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">{post.date}</span>
                  <span className="text-blue-500">{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
