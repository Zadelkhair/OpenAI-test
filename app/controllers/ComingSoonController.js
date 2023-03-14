const fs = require("fs");
const path = require("path");
const responseBuilder = require("./responseBuilder");

class ComingSoonController {
  static async comingSoon(req, res) {

    // get from req
    const { email, areYouADev, areYouAClient } = req.body;

    // save the data on a file ./data/comming_soon.json
    // if the file does not exist, create it
    // if the file exists, append the data to the file

    try {
      if (!fs.existsSync(path.join(__dirname, "../../data/coming_soon.json"))) {
        fs.writeFileSync(
          path.join(__dirname, "../../data/coming_soon.json"),
          JSON.stringify([])
        );
      }

      const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../../data/coming_soon.json"))
      );

      data.push({ email, areYouADev, areYouAClient });

      fs.writeFileSync(
        path.join(__dirname, "../../data/coming_soon.json"),
        JSON.stringify(data)
      );

      // return a success message
      return res.json(
        responseBuilder.success({
          message: "Thank you for your interest. We will be in touch soon.",
        })
      );
    } catch (err) {
      return res.json(responseBuilder.error(err.message));
    }
  }
}

module.exports = ComingSoonController;
