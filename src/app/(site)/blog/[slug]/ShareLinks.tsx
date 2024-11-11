"use client";
import React from "react";
import { TwitterShare, LinkedinShare } from "react-share-kit";

const ShareLinks = ({ blogPost }: { blogPost: any }) => {
  return (
    <div className="mt-8 pt-8 border-t">
      <h2 className="text-lg font-semibold mb-4">Share this article</h2>
      <div className="flex gap-4">
        <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <TwitterShare
            bgColor="#374151"
            size={40}
            borderRadius={10}
            url={`https://hamza-v2.vercel.app/blog/${blogPost}`}
          />
        </button>
        <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <LinkedinShare
            size={40}
            borderRadius={10}
            bgColor="#374151"
            url={`https://hamza-v2.vercel.app/blog/${blogPost}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ShareLinks;
