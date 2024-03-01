import { sanityClient } from "sanity:client";
import groq from "groq";

export async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
export async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getMostRecentPost() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][0]`
  );
}

export async function getRandomWork() {
  return await sanityClient.fetch(
    groq`*[_type == "work" && defined(slug.current) && year > "2021-01-01"][${Math.floor(Math.random() * 6)}]`
  );
}

export async function getWork() {
  return await sanityClient.fetch(
    groq`*[_type == "work" && defined(slug.current)] | order(year desc)`
  );
}

export async function getAboutPage() {
  return await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current) && slug.current == 'about']`
  );
}