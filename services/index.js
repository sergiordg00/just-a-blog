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
    const response = await fetch(`${API_URL}/posts?filters[slug][$eq]=${postSlug}&populate[comments][sort]=createdAt:desc&populate[cover]=*&populate[category]=*`, { cache: "no-store" });
    const data = await response.json();

    return data.data[0];
  } catch(err) {
    return null;
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

export async function getCategoryInfo(categorySlug) {
  try {
    const response = await fetch(`${API_URL}/categories?filters[slug][$eq]=${categorySlug}&populate[posts][populate][0]=cover&populate[posts][populate][1]=comments&populate=banner`, { cache: "no-store" });
    const category = (await response.json()).data[0];
    const name = category.attributes.name;

    const banner = category.attributes.banner.data.attributes.formats.large.url;
    const posts = category.attributes.posts.data;
    const totalViews = posts.reduce((acc, post) => acc + parseInt(post.attributes.views), 0);
    const totalComments = posts.reduce((acc, post) => acc + post.attributes.comments.data.length, 0);

    return { name, banner, totalViews, totalComments, posts };
  } catch(err) {
    return [];
  }
}
