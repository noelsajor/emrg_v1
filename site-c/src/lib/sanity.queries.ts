import groq from "groq";

export const latestPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "categories": categories[]->title,
  "author": author->name,
  "readingTime": round(length(pt::text(body)) / 5 / 200)
}`;

export const paginatedPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[$start...$end] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "categories": categories[]->title,
  "author": author->name,
  "readingTime": round(length(pt::text(body)) / 5 / 200)
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  ...,
  "categories": categories[]->title,
  "author": author-> {
    name,
    role,
    bio,
    image
  },
  "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
    title,
    "slug": slug.current,
    mainImage,
    publishedAt
  }
}`;
