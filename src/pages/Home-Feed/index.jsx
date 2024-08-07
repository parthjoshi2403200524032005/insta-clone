import React, { useEffect, useState } from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import Stories from "./Stories"; // Update the import path as needed

function HomeFeed() {
  const [posts, setPosts] = useState([
    {
      username: "user1",
      imageUrl: "https://via.placeholder.com/150",
      caption: "This is a sample post",
      type: "photo",
    },
    {
      username: "user2",
      imageUrl: "https://via.placeholder.com/150",
      caption: "Another example post",
      type: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ]);
  const [stories, setStories] = useState([
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    { imageUrl: "https://via.placeholder.com/80" },
    // Add more story items to test pagination
  ]);

  useEffect(() => {
    // Fetch posts from the backend
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));

    // Fetch stories from the backend
    fetch("/api/stories")
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error("Error fetching stories:", error));
  }, []);

  return (
    <>
      <SimpleLayout>
        <div className="mb-4 ml-[515px] mt-[20px]">
          <Stories stories={stories} />
        </div>
        <div className="ml-[600px]">
          <div className="feed-container space-y-4">
            {posts.map((post, index) => (
              <Post
                key={index}
                username={post.username}
                imageUrl={post.imageUrl}
                caption={post.caption}
                type={post.type}
                videoUrl={post.videoUrl}
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

function Post({ username, imageUrl, caption, type, videoUrl }) {
  return (
    <div className="">
      <div className="post-header font-bold mb-2">{username}</div>
      <div className="post-media mb-2">
        {type === "photo" ? (
          <img
            src={imageUrl}
            alt="post"
            className="w-[450px] h-[550px] rounded-lg border-[#363636] border cursor-pointer"
          />
        ) : (
          <video
            controls
            className="rounded-lg border-[#363636] border w-[450px] h-[650px] cursor-pointer"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="post-caption">
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default HomeFeed;
