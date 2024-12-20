/* eslint-disable react/prop-types */
import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
          key={post.id}
        />
      ))}
    </div>
  );
};
