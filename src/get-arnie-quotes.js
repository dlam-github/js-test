const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map((url) => httpGet(url)))
    .then((responses) =>
      responses.map(({ body, status }) => {
        const { message } = JSON.parse(body);

        const key = status === 200 ? "Arnie Quote" : "FAILURE";

        return {
          [key]: message,
        };
      })
    )
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  getArnieQuotes,
};
