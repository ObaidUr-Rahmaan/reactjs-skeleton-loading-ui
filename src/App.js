import "./styles.css";
import Card from "./Card";
import Skeleton from "./Skeleton";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())

        .then((data) => {
          setPosts(data);

          setIsEmpty(false);
        })

        .catch((err) => console.log(err));
    }, 1500);
  }, []);

  return (
    <>
      <h1>Blog posts</h1>

      {isEmpty && [1, 2, 3, 4].map((value) => <Skeleton key={value} />)}

      {isEmpty ||
        posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
    </>
  );
}

export default App;
