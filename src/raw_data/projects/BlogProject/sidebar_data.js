import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const sidebar = {
  title: "About",
  description:
    "Welcome to my tech haven! Explore a variety of topics, from coding and development to the latest tech trends. No frills, just tech. Happy reading!!",
  archives: [
    { title: "The Best Way to solve DP problems", blognum: "2" },
    { title: "Design Changes On WhatsApp", blognum: "1" },
  ],
  about_me:[
    { title: "How I am the most eligible bachelor in the universe", blognum: "#" }
  ],
  social: [
    { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/vidit-tayal/" },
    { name: "Portfolio", icon: LanguageIcon, url: "https://vidittayal.netlify.app/" },
    { name: "Codeforces", icon: CodeIcon, url: "https://codeforces.com/profile/vidittayal" },
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/Vidit-Tayal" },
  ],
};

export default sidebar;
