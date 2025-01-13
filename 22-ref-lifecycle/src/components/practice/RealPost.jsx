import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
export default function RealPost() {
  //https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("axios data: ", response.data);
    setPosts(response.data.slice(0, 10));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h6>여기는 RealPost</h6>
      {posts.length === 0 ? (
        <span>loading</span>
      ) : (
        posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
