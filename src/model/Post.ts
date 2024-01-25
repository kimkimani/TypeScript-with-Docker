export default interface Post {
    // The '?' indicates that id is optional
    // Its is set to AUTO_INCREMENT 
    id?: string,
    title: string,
    description: string,
    // The '?' indicates that author is optional
    author?: string | null; 
    // The '?' indicates that content is optional
    content?: string | null; 
    // Date has a DEFAULT value
    created_at?: Date,
}