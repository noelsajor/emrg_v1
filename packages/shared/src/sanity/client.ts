import { createClient, type SanityClient } from '@sanity/client';

export type { SanityClient };

export interface SanityClientOptions {
  projectId?: string;
  dataset?: string;
  apiVersion?: string;
  useCdn?: boolean;
}

/**
 * Create a Sanity client with runtime environment detection.
 *
 * Tries in order:
 * 1. Explicit `opts` passed as argument
 * 2. `import.meta.env.SANITY_*` (Astro 5 / Vite SSR)
 * 3. `process.env.PUBLIC_SANITY_*` (Node.js, used by site-b/site-e)
 * 4. Hardcoded defaults (`eu11pcrn` / `production`)
 */
export function createSanityClient(opts?: SanityClientOptions): SanityClient {
  let projectId = opts?.projectId;
  let dataset = opts?.dataset;

  if (!projectId || !dataset) {
    // Try import.meta.env (available in Astro 5 / Vite SSR contexts)
    try {
      if (
        typeof import.meta !== 'undefined' &&
        typeof (import.meta as unknown as Record<string, unknown>).env !== 'undefined'
      ) {
        const env = (import.meta as unknown as Record<string, Record<string, string | undefined>>).env;
        if (!projectId && env?.SANITY_PROJECT_ID) {
          projectId = env.SANITY_PROJECT_ID;
        }
        if (!dataset && env?.SANITY_DATASET) {
          dataset = env.SANITY_DATASET;
        }
      }
    } catch {
      // Not in a context where import.meta.env exists (e.g. bare Node.js)
    }
  }

  // Fall back to process.env (site-b/site-e pattern)
  if (!projectId) {
    projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
  }
  if (!dataset) {
    dataset = process.env.PUBLIC_SANITY_DATASET;
  }

  return createClient({
    projectId: projectId || 'eu11pcrn',
    dataset: dataset || 'production',
    useCdn: opts?.useCdn ?? true,
    apiVersion: opts?.apiVersion || '2023-05-03',
  });
}

let cachedClient: SanityClient | null = null;

/**
 * Get or create a singleton Sanity client.
 * The first call creates the client; subsequent calls return the cached instance.
 */
export function getClient(opts?: SanityClientOptions): SanityClient {
  if (!cachedClient) {
    cachedClient = createSanityClient(opts);
  }
  return cachedClient;
}
