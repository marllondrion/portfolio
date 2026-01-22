// Import all images recursively from assets/images folder
const imageModules: Record<string, string> = import.meta.glob(
    '@/assets/images/**/*.{svg,png,jpg,jpeg,webp,gif}',
    { eager: true, as: 'url' }
);

/**
 * Callback function type for handling missing images
 */
type FallbackCallback = (missingPath: string) => string | null;

/**
 * Normalize path to extract the relative path from 'images' folder
 * Handles cases like:
 * - 'education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 * - '/education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 * - 'src/assets/images/education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 * - '/src/assets/images/education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 * - '@/assets/images/education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 * - 'assets/images/education/unisq-logo.svg' -> 'education/unisq-logo.svg'
 */
function normalizeImagePath(path: string): string {
    // Remove leading slash
    let normalized = path.startsWith('/') ? path.slice(1) : path;

    // Remove '@/' prefix if present
    if (normalized.startsWith('@/')) {
        normalized = normalized.slice(2);
    }

    // Find 'images' folder and extract everything after it
    const imagesIndex = normalized.indexOf('images/');
    if (imagesIndex !== -1) {
        // Extract path after 'images/'
        normalized = normalized.slice(imagesIndex + 'images/'.length);
    }

    // Remove any remaining 'src/assets/' prefix
    normalized = normalized.replace(/^src\/assets\//, '');
    normalized = normalized.replace(/^assets\//, '');

    return normalized;
}

/**
 * Get image by relative path from @/assets/images/
 * Supports any nesting level: images/photo.png, images/1/photo.png, images/1/2/3/photo.png
 * @param path - Path relative to images folder or full path containing 'images/'
 * @param fallback - Fallback image path or callback function
 * @returns Image URL or fallback result
 */
export function getImage(path: string, fallback?: string | FallbackCallback | null): string | null {
    // Normalize the path
    const normalizedPath = normalizeImagePath(path);

    // Construct the full path key that Vite uses
    const fullPath = `/src/assets/images/${normalizedPath}`;

    // Try to find the image
    const imageUrl = imageModules[fullPath];

    if (imageUrl) {
        return imageUrl;
    }

    // Handle fallback
    if (typeof fallback === 'function') {
        return fallback(path);
    } else if (typeof fallback === 'string') {
        // Fallback is another image path - normalize it too
        const normalizedFallback = normalizeImagePath(fallback);
        const fallbackFullPath = `/src/assets/images/${normalizedFallback}`;
        return imageModules[fallbackFullPath] || null;
    }

    console.warn(`Image not found: ${fullPath}`);
    return null;
}

/**
 * Get all images from a specific subfolder (supports any nesting level)
 * @param folder - Folder path relative to images (e.g., 'education', '1/2/3')
 * @returns Object with filename as key and URL as value
 */
export function getImagesFromFolder(folder: string): Record<string, string> {
    const normalizedFolder = normalizeImagePath(folder);
    const prefix = `/src/assets/images/${normalizedFolder}/`;

    return Object.keys(imageModules)
        .filter(path => path.startsWith(prefix))
        .reduce((acc, path) => {
            const filename = path.split('/').pop();
            if (filename) {
                acc[filename] = imageModules[path];
            }
            return acc;
        }, {} as Record<string, string>);
}

/**
 * Get all images from a folder including all subfolders recursively
 * @param folder - Folder path relative to images
 * @returns Object with relative path as key and URL as value
 */
export function getImagesFromFolderRecursive(folder: string): Record<string, string> {
    const normalizedFolder = normalizeImagePath(folder);
    const prefix = `/src/assets/images/${normalizedFolder}`;

    return Object.keys(imageModules)
        .filter(path => path.startsWith(prefix))
        .reduce((acc, path) => {
            // Get relative path from the specified folder
            const relativePath = path.replace(`/src/assets/images/${normalizedFolder}/`, '');
            acc[relativePath] = imageModules[path];
            return acc;
        }, {} as Record<string, string>);
}

/**
 * Get all available image paths (useful for debugging)
 * @returns Array of image paths relative to @/assets/images/
 */
export function listAllImages(): string[] {
    return Object.keys(imageModules).map(path =>
        path.replace('/src/assets/images/', '')
    );
}

/**
 * Check if an image exists
 * @param path - Path relative to images folder or full path
 * @returns True if image exists
 */
export function imageExists(path: string): boolean {
    const normalizedPath = normalizeImagePath(path);
    const fullPath = `/src/assets/images/${normalizedPath}`;
    return fullPath in imageModules;
}

/**
 * Get image with automatic fallback to default
 * @param path - Path relative to images folder
 * @param defaultImage - Default image path (default: 'defaults/placeholder.png')
 * @returns Image URL (never null)
 */
export function getImageOrDefault(path: string, defaultImage: string = 'defaults/placeholder.png'): string {
    return getImage(path, defaultImage) || '';
}
