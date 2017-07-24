var mongoose = require("mongoose"); 
var Campground = require("./models/campground"); 
var Comment = require("./models/comment"); 

var data = [
    {
        name: "False Creek", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/01/f3/bc/0a/false-creek.jpg", 
        description: "Bacon ipsum dolor amet andouille short loin cow fatback beef ribs hamburger bresaola pancetta. Tri-tip beef ribs fatback biltong turducken boudin jowl, leberkas tongue sirloin chicken strip steak burgdoggen hamburger. Sausage short loin alcatra capicola, flank beef pastrami burgdoggen ham biltong salami meatball hamburger ground round landjaeger. Shankle andouille tenderloin ribeye prosciutto pork turkey hamburger. Cow doner pork loin drumstick pork, kevin corned beef andouille t-bone ribeye hamburger pancetta. Meatball chicken hamburger, tri-tip capicola bacon flank cow pork chop leberkas t-bone kevin short loin ham. Prosciutto filet mignon meatloaf biltong kielbasa shankle cupim brisket ribeye chuck doner turkey landjaeger strip steak."
    },
    {
        name: "English Bay", 
        image: "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1110,q_50,w_1920/v1/clients/vancouverbc/beaches_e5e4997c-1ad5-4463-b6a6-0b87279281dc.jpg", 
        description: "Bacon ipsum dolor amet andouille short loin cow fatback beef ribs hamburger bresaola pancetta. Tri-tip beef ribs fatback biltong turducken boudin jowl, leberkas tongue sirloin chicken strip steak burgdoggen hamburger. "
    },
    {
        name: "Yaletown", 
        image: "https://data.parkbench.com/content/data/uploaded/admin_uploads/Yaletown-Image.jpg", 
        description: "Bacon ipsum dolor amet andouille short loin cow fatback beef ribs hamburger bresaola pancetta. Tri-tip beef ribs fatback biltong turducken boudin jowl, leberkas tongue sirloin chicken strip steak burgdoggen hamburger. Sausage short loin alcatra capicola, flank beef pastrami burgdoggen ham biltong salami meatball hamburger ground round landjaeger. Shankle andouille tenderloin ribeye prosciutto pork turkey hamburger. Cow doner pork loin drumstick pork, kevin corned beef andouille t-bone ribeye hamburger pancetta. Meatball chicken hamburger, tri-tip capicola bacon flank cow pork chop leberkas t-bone kevin short loin ham. Prosciutto filet mignon meatloaf biltong kielbasa shankle cupim brisket ribeye chuck doner turkey landjaeger strip steak."
    },


]
function seedDB() {
    //remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log("err"); 
        }
        // console.log("removed campgrounds!"); 
        //  //add a few campgrounds
        // data.forEach(function(seed) {
        //   Campground.create(seed, function(err, campground) {
        //       if (err) {
        //           console.log(err); 
        //       } else {
        //           console.log("added a campground.");
        //           //create a comment
        //           Comment.create(
        //                 {
        //                   text: "This place is great, but I wish there was internet",
        //                   author: "Homer"
                       
        //                 }, function(err, comment) {
        //                     if (err) {
        //                         console.log(err); 
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save(); 
        //                         console.log("Created new comment"); 
        //                     }
        //                 });
        //       }
        //   }); 
        // });
    }); 
    
   
}

module.exports = seedDB; 
