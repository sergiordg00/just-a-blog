const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`;

export async function getAllCategories() {
  try {
    const response = await fetch(`${API_URL}/categories?pagination[limit]=8`);
    const data = await response.json();

    return data.data;
  } catch(err) {
    return [];
  }
}

export async function getArticleOfTheDay() {
  try {
    const response = await fetch(`${API_URL}/article-of-the-days?populate[post][populate][0]=cover&populate[post][populate][1]=category`, { cache: "no-store" });
    const data = await response.json();

    return data.data[0];
  } catch(err) {
    return [];
  }
}

export async function getTrendingPosts() {
  try {
    const response = await fetch(`${API_URL}/posts?sort=views:desc&populate=cover&populate=category&pagination[limit]=8&fields[0]=title&&fields[1]=slug`, { cache: "no-store" });
    const data = await response.json();

    return data.data;
  } catch(err) {
    return [];
  }
}

export async function getPostsOfCategory(categorySlug) {
  try {
    const response = await fetch(`${API_URL}/posts?filters[category][slug][$eq]=${categorySlug}&populate=cover`);
    const data = await response.json();

    return data.data;
  } catch(err) {
    return [];
  }
}

export async function getPostBySlug(postSlug) {
  try {
    const response = await fetch(`${API_URL}/posts?filters[slug][$eq]=${postSlug}&populate=cover&populate=category&populate=comments`);
    const data = await response.json();

    return data[0];
  } catch(err) {
    return [];
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_URL}/posts?populate=cover`);
    const data = await response.json();
    
    return data.data;
  } catch(err) {
    return [];
  }
}
