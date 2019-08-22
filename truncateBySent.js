String.prototype.truncateBySent = function(sentCount = 3, moreText = "") {
  //match ".","!","?" - english ending sentence punctuation
  var sentences = this.match(/[^\.!\?]+[\.!\?]+/g);
  if (sentences) {
    console.log(sentences.length);
    if (sentences.length >= sentCount && sentences.length > sentCount) {
      //has enough sentences
      return sentences.slice(0, sentCount).join(" ") + moreText;
    }
  }
  //return full text if nothing else
  return this;
};
