class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  search() {
    const Keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};
    console.log(Keyword);
    this.query = this.query.find({ ...Keyword });
    return this;
  }
}

module.exports = ApiFeatures;
