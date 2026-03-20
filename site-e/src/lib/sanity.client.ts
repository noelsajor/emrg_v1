import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'eu11pcrn',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});
