import { BlogPost } from "../sections/types.ts";

/**
 * @title Blogpost
 * @description Defines a blog post.
 */
const loader = ({ post }: { post: BlogPost }): BlogPost => post;

export default loader;
