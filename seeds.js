var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbicaw2QUQHG1PldcDZMKMPIxd7G8G6-gA-eMm4k1_4GpKk5jNEQ&reload=on",
        description: "Lorem ipsum dolor sit amet, probo lorem deserunt eos id, iuvaret ocurreret assueverit mei in, cu usu maiorum oportere. Eu omnium veritus iracundia his, duo doming intellegat reprehendunt ea. His libris abhorreant an, no eam nobis omnes mnesarchum. Usu everti voluptua antiopam id.",

    },
    {
        name: "Forest Cliffs", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjK1ofZzlWFBfpg3Xzg7Y3gFD4v21N-6gPtU2b5C5-9uJBjqgYtw&reload=on",
        description: "Sea eu legimus disputando, ius an wisi impetus meliore, albucius apeirian no mel. Pri ea nullam euismod, suas mediocrem at mei, usu"         
    },
    {
        name: "Au Sable River", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdIGbTC6F54nX272y3IUc2ij5trZG0_-TKzASspBJLm7t8yYZXg",
        description: "t interesset. Mel id civibus splendide, dico laudem pri ea. Ancillae concludaturque vim et. Te idque officiis nec, vis errem expetendis disputationi at, ex mei laoreet repudiare urbanitas. Dicta petentium repudiandae an mel." 
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
          Campground.create(seed, function(err, campground){
              if(err){
                  console.log(err);
              } else {
                  console.log("added a campground");
                  //create a comment
                  Comment.create(
                      {
                          text: "This place is great, but I wish there was internet",
                          author: "Homer"
                      }, function(err, comment){
                          if(err){
                              console.log(err);
                          } else {
                            campground.comments.push(comment); 
                            campground.save();
                            console.log("Created new comment");
                          }
                      });
                }
            }); 
        });
    });
    //add a few comments
}

module.exports = seedDB;

