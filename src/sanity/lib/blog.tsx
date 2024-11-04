import { client } from "./client";

// get all blog posts
export async function getAllBlogPosts() {
  const blogPosts = await client.fetch(`*[_type == "post"] {
        slug,
        cardData {
            ...,
            categories[]-> {
                title
            }
        },
        timeToRead,
        publishedAt,
        author->{
            name,
            image,
            bio
        }
    }`);
  return blogPosts;
}

// get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const blogPost = await client.fetch(
    `*[_type == "post" && slug.current == $slug]`,
    { slug }
  );
  return blogPost;
}

// get seo data for a blog post by slug
export async function getBlogPostSeoBySlug(slug: string) {
  const seoData = await client.fetch(
    `*[_type == "post" && slug.current == $slug]{seo}`,
    { slug }
  );
  return seoData;
}
