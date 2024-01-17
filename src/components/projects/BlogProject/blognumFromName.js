function blognumFromName(filename) {
  const match = filename.match(/blog-post(\d+)\.md/);
  return match ? parseInt(match[1], 10) : null;
}

export default blognumFromName;
