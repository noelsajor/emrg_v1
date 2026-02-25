import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "87zy9fvk",
  dataset: "production",
  useCdn: true,
  // `false` if you want to ensure fresh data
  apiVersion: "2024-02-24"
});
async function getPosts() {
  const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author-> {name, image},
    "categories": categories[]-> {title}
  }`);
  return posts;
}
async function getPost(slug) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage,
    "author": author-> {name, image, bio},
    "categories": categories[]-> {title}
  }`, { slug });
}

export { getPosts as a, client as c, getPost as g };
