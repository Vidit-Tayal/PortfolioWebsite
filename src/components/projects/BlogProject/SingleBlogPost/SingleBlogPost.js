import Main from "../Main";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import Sidebar from "../Sidebar";
import MainFeaturedPost from "../MainFeaturedPost";
import { useParams } from "react-router-dom";
import sidebar from "../../../../raw_data/projects/BlogProject/sidebar_data";
import mainFeaturedPost from "../../../../raw_data/projects/BlogProject/SingleBlogPost/mainFeaturedPost";


const SingleBlogPost = (props) => {
  const { blognum } = useParams();  
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogPostFiles = [];
      blogPostFiles.push("blog-post"+blognum+".md");
      const fetchedPosts = await Promise.all(
        blogPostFiles.map(async (fileName) => {
          try {
            const response = await axios.get(`../../raw_data/Projects/blog project/BlogContent/${fileName}`);
            return [response.data,fileName];
          } catch (error) {
            console.error(`Error fetching MD file ${fileName}:`, error);
            return "";
          }
        })
      );
      setPosts(fetchedPosts);
    };

    fetchBlogPosts();
  }, []); 

  console.log(posts);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" backButtonLocation="blog" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main posts={posts} show_full_post={"true"} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              about_me={sidebar.about_me}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default SingleBlogPost;
