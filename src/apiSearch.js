const imdb = require('imdb-api');

export default class apiSearch {
  searchData(params) {
    let movie;
    let things = params;
    imdb.getReq((err, things) => {
      movie = things;
    });

    return movie;
  }
}
