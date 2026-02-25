import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'eu11pcrn',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-02-24',
});

const IS_PLACEHOLDER = client.config().projectId === 'REPLACE_ME_IF_NEEDED';

export async function getPosts() {
  if (client.config().projectId === 'REPLACE_ME_IF_NEEDED') {
    console.warn('Sanity Project ID is a placeholder. Returning empty posts array.');
    return [];
  }

  try {
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
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  if (IS_PLACEHOLDER) return null;

  try {
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
  } catch (error) {
    console.error(`Error fetching post ${slug} from Sanity:`, error);
    return null;
  }
}
