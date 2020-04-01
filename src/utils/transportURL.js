const nba = require("nba");
const getJSON = require("nba/src/get-json");


const newHost = "stats.gleague.nba.com";

const transport = (url, params, options) => {
    // simply swap the host and then defer the rest to the built in getJSON function
    const fixedURL = url.replace("stats.nba.com", newHost);
    return getJSON(fixedURL, params, options);
};

export const stats = nba.stats.withTransport(transport);

