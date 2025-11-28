const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Album {
    userId: number;
    id: number;
    title: string;
}

/**
 * Fetch all albums from the API
 * @returns Promise<Album[]> Array of albums
 */
export async function getAlbums(): Promise<Album[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/albums`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch albums: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching albums:", error);
        throw error;
    }
}

/**
 * Fetch a single album by ID
 * @param id - Album ID (can be string or number)
 * @returns Promise<Album> Single album object
 */
export async function getAlbum(id: string | number): Promise<Album> {
    try {
        const response = await fetch(`${API_BASE_URL}/albums/${id}`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
    if (!response.ok) {
        throw new Error(`Failed to fetch album: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(`Error fetching album ${id}:`, error);
        throw error;
    }
}