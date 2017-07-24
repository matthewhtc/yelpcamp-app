var express = require("express"); 
var router = express.Router(); 
var passport = require("passport"); 
var User = require("../models/user"); 

// home page --> redirect to landing page aka index page
router.get("/", function(req, res) {
    res.render("landing"); //dont forget that with line 4, don't have to write "landing.ejs"
});

// ===========
// AUTH ROUTES
// ===========

// show register form
router.get("/register", function(req, res) {
    res.render("register", {page: 'register'}); 
});

// handle sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    
    //register will handle storing username and password as crazy hash
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register", {error: err.message});
        }
        //does alot of stuff for us! this bottom line
        passport.authenticate("local")(req, res, function() {
            req.flash("success", "Welcome to The 'Couve, " + user.username); 
            res.redirect("/campgrounds");
        }); 
    });
}); 

// show login form
router.get("/login", function(req, res) {
    res.render("login", {page: 'login'}); 
}); 

// handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!"); 
    res.redirect("/campgrounds"); 
});

module.exports = router; 