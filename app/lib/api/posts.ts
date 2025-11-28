// API service for posts
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

/**
 * Fetch all posts from the API
 * @returns Promise<Post[]> Array of posts
 */
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

/**
 * Fetch a single post by ID
 * @param id - Post ID (can be string or number)
 * @returns Promise<Post> Single post object
 */
export async function getPost(id: string | number): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}

