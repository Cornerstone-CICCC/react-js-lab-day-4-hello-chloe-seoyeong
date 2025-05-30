import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};

type PostStoreState = {
  posts: Post[];
  addPost: (post: Omit<Post, "id">) => void;
  editPost: (id: string, updatedPost: Partial<Post>) => void;
  deletePost: (id: string) => void;
};

export const usePostStore = create<PostStoreState>((set) => ({
  posts: [],
  addPost: (post) => {
    const newPost = {
      id: uuidv4(),
      ...post,
    };
    set((state) => ({ posts: [...state.posts, newPost] }));
  },
  editPost: (id, updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
