const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async (req, res) => {
  const url = req.params.url;
  console.log(url);
  try {
    await axios(`https://${url}`).then((response) => {
      const html = response.data;
      // console.log(html);

      const $ = cheerio.load(html);

      const title = $("title").text();
      const metaDescription = $('meta[name="description"]').attr("content");

      return res.status(200).json({
        metaTitle: title,
        metaDescription: metaDescription,
      });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
