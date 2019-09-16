/* Add all the required libraries*/
const util = require('util');
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect('mongodb+srv://guest:DYvDBtXBA4fynYDA@cluster0-qfi3w.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({'name':'Library West'}, function (err, listing) {
    if (err) return handleError(err);
    console.log(listing);
  });
  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({'code':'CABL'}, function(err,listing){
    if (err) return handleError(err);
    console.log(listing);    
  });

};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({'address':'701 N Broadway, Sleepy Hollow, NY 10591, United States'},{'address':'1953 Museum Rd, Gainesville, FL 32603, United States'}, function(err, listing) {
    if (err) return handleError(err);
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listing) {
    if (err) return handleError(err);
    console.log(util.inspect(listing, {'maxArrayLength':null}));
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
