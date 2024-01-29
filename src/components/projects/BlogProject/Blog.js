import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";
import sidebar from "../../../raw_data/projects/BlogProject/sidebar_data";
import mainFeaturedPost from "../../../raw_data/projects/BlogProject/main_featured_post_data";
import featuredPosts from "../../../raw_data/projects/BlogProject/featured_posts_data";
import total_nof_blogs from "../../../raw_data/projects/BlogProject/total_nof_blogs";
import textReducer from "../../text_reducer";


export default function Blog() {
  const [posts, setPosts] = useState([]);
  const nofBlogs = total_nof_blogs;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogPostFiles = [];
      for (var i = 1; i <= nofBlogs; i++) {
        blogPostFiles.push("blog-post" + i + ".md");
      }
      const fetchedPosts = await Promise.all(
        blogPostFiles.map(async (fileName) => {
          try {
            const response = await axios.get(`./raw_data/Projects/blog project/BlogContent/${fileName}`);
            return [textReducer( response.data,500),fileName];
          } catch (error) {
            console.error(`Error fetching MD file ${fileName}:`, error);
            return "";
          }
        })
      );
      setPosts(fetchedPosts.reverse());
    };
    fetchBlogPosts();
  }, []); 

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog"  backButtonLocation=""/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Recent Uploads" posts={posts} show_full_post={"false"} />
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
}
