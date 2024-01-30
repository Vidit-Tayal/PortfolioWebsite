const imglinks = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const mainFeaturedPost = {
  title: "The Best Way To Solve DP Problems",
  description:
    "In this post, I'll share a simple set of steps that can guide you in solving any DP problem.",
  image: imglinks[Math.floor(Math.random() * imglinks.length)],
  imageText: "main image description",
  linkText: "Continue reading…",
  blognum:"2",
};

export default mainFeaturedPost;
