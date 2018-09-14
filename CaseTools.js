String.prototype.ucWords = function(){
 return this.toLowerCase().replace(/\b[a-z]/g, (a) => a.toUpperCase());
};


String.prototype.ucFirst = function(){
 return this.toLowerCase().replace(/^[a-z]|(?:\b\.\s?|[\!\?]\s?)[a-z]/g, (a)=> a.toUpperCase());
};
