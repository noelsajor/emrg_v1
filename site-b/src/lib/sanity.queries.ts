import { client } from './sanity.client';
import groq from 'groq';

export async function getLatestPosts(count = 3) {
    return await client.fetch(
        groq`*[_type == "post"] | order(publishedAt desc)[0...${count}] {
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->name
    }`
    );
}

export async function getAllPosts() {
    return await client.fetch(
        groq`*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }`
    );
}

export async function getPostBySlug(slug: string) {
    return await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0] {
      ...,
      "categories": categories[]->title,
      "author": author->{ name, role, bio, image },
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
        title,
        "slug": slug.current,
        mainImage,
        publishedAt
      }
    }`,
        { slug }
    );
}
