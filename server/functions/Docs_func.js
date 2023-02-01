module.exports = async (req, res) => {
  console.log("hello");
  res.send(`
    <h1>API Documentation</h1>
    <p>Welcome to the API documentation for your application.</p>
    <p>Here's a list of available endpoints:</p>
    <ul>
      
      <li>GET /pageseo/:url</li>
      
    </ul>
  `);
};
