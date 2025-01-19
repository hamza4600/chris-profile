"use client";
import { baseUrl } from "@/components/Schema";
import React from "react";
import { TwitterShare, LinkedinShare, WhatsappShare, FacebookShare } from "react-share-kit";

const ShareLinks = ({ blogPost }: { blogPost: any }) => {
  return (
    <div className="mt-8 pt-8 border-t">
      <h2 className="text-lg font-semibold mb-4">Share this article</h2>
      <div className="flex gap-4">
        
        {/* whatsapp */}
        <WhatsappShare
          size={40}
          borderRadius={10}
          url={`${baseUrl}/blog/${blogPost}`}
          title={blogPost?.seo?.title}
        />
        {/* facebook */}
        <FacebookShare
          size={40}
          borderRadius={10}
          url={`${baseUrl}/blog/${blogPost}`}
          title={blogPost?.seo?.title}
        />
        {/* twitter */}
        <TwitterShare
          size={40}
          borderRadius={10}
          url={`${baseUrl}/blog/${blogPost}`}
          title={blogPost?.seo?.title}
          hashtags={blogPost?.seo?.tags}
        />

        <LinkedinShare
          size={40}
          borderRadius={10}
          url={`${baseUrl}/blog/${blogPost}`}
          title={blogPost?.seo?.title}
          summary={blogPost?.seo?.description}
          source={baseUrl}
        />

      </div>
    </div>
  );
};

export default ShareLinks;
