import { client } from "@/lib/sanity";

export async function getAllCategories() {
  const data = await client.fetch(`*[_type == "category"] [0..7]`);
  return data;
}

export async function getLatestPosts() {
  const data = await client.fetch(`*[_type == "post"] | order(_createdAt desc) [0..1] {..., category->}`);
  return data;
}

export async function getArticleOfTheDay() {
  const data = await client.fetch(`*[_type == "articleoftheday"][0]{
    ...,
    post->
  }`);

  return data;
}

export async function getMostVisitedPosts() {
  const data = await client.fetch(`*[_type == "post"] | order(views desc) [0..7] {
    ...,
    category->
  }`);
  return data;
}

export async function getCategoryBySlug(slug) {
  const data = await client.fetch(`*[_type == "category" && slug.current == "${slug}"][0]{
    ...,
    'posts': *[_type == "post" && category._ref == ^._id] | order(_createdAt desc) [0..7],
    'totalComments': count(*[_type == "comment" && post->category._ref == ^._id]),
  }`);

  const totalViews = data.posts.reduce((acc, post) => acc + post.views, 0);

  return { name: data.name, banner: data.banner, totalViews, totalComments: data.totalComments, posts: data.posts };
}

export async function getPostBySlug(slug) {
  const data = await client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    category->,
    'comments': *[_type == "comment" && post._ref == ^._id] | order(_createdAt desc)
  }`);
  
  return data;
}