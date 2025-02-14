import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {createClient} from "contentful";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getEngines() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  return await client.getEntries({content_type: 'engine'}).then((response) => response.items);
}