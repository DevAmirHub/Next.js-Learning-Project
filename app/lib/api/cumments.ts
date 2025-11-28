const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}


/**
 * Fetch all comments from the API
 * @returns Promise<Comment[]> Array of comments
 */
export async function getComments(): Promise<Comment[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/comments`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch comments: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
}

/**
 * Fetch a single comment by ID
 * @param id - Comment ID (can be string or number)
 * @returns Promise<Comment> Single comment object
 */
export async function getComment(id: string | number): Promise<Comment> {
    try {
        const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
    if (!response.ok) {
        throw new Error(`Failed to fetch comment: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(`Error fetching comment ${id}:`, error);
        throw error;
}}