import React, { useMemo, useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostsTable from "./components/PostsTable";

function App() {
  const [postsData, setPostsData] = useState([]);
  const columns = useMemo(() => [
    { accessor: "userId", Header: "User Id" },
    { accessor: "id", Header: "Post Id" },
    { accessor: "title", Header: "Post Title" },
    { accessor: "body", Header: "Content", disableSortBy: true },
  ]);
  useEffect(() => {
    getPostsData();
  }, []);
  const getPostsData = async () => {
    const response = await axios.get("http://localhost:5000/store-posts");
    console.log("response = ", response.data);
    setPostsData(response.data);
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: 15 }}>Welcome To Posts App</h1>
      <Container style={{ marginTop: 20 }}>
        <PostsTable columns={columns} data={postsData} />
      </Container>
    </div>
  );
}

export default App;
