let config = require("./config.js");
let Twitter = require("twitter");

let T = new Twitter(config);

let params = {
  q: "@otirbnaej",
  count: 10,
  result_type: "recent",
  lang: "pt",
};

T.get("search/tweets", params, function (err, data, res) {
  console.log(data);
});
