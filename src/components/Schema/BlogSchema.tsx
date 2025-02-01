'use client'

import { WithContext } from 'schema-dts'

interface BlogSchemaProps {
  schemas: {
    title: string;
    description: string;
    publishedAt: string;
    author: {
      name: string;
    };
  };
}

export default function BlogSchema({ schemas }: BlogSchemaProps) {
  if (!schemas) {
    console.error("Blog data is required");
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": schemas.title,
    "description": schemas.description,
    "datePublished": schemas.publishedAt,
    "author": {
      "@type": "Person",
      "name": schemas.author.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}