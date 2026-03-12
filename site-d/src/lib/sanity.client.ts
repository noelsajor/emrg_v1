import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "eu11pcrn",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    if (!source) return { url: () => "" };
    return builder.image(source);
}
