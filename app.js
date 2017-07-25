var express        = require("express"), 
    app            = express(), 
    bodyParser     = require("body-parser"), 
    mongoose       = require("mongoose"), 
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    Campground     = require("./models/campground"), //don't need .js; implicit
    seedDB         = require("./seeds"),
    Comment        = require("./models/comment"),
    User           = require("./models/user"); 

// requiring routes 
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes       = require("./routes/index"); 

// console.log(process.env.DATABASEURL); 
mongoose.connect(process.env.DATABASEURL); //making a database dynamically

app.use(bodyParser.urlencoded({extended: true})); //just memorize this line cuz ull see it all the time
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public")); 
app.use(methodOverride("_method")); 
app.use(flash()); 

// seedDB(); // seed the db


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

//will call this function on every single route
app.use(function(req, res, next) {
    //whatever we put in res.locals is available in our templates
    res.locals.currentUser = req.user; 
    
    //make flash message available to all templates
    res.locals.error = req.flash("error"); 
    res.locals.success = req.flash("success"); 
    
    //need to move onto next code!!!!!
    next(); 
});

//tells our app to use these 3 route files
app.use("/", authRoutes); 
app.use("/campgrounds/:id/comments", commentRoutes); 
app.use("/campgrounds", campgroundRoutes); 

// home page --> redirect to landing page aka index page
app.get("/", function(req, res) {
    res.render("landing"); //dont forget that with line 4, don't have to write "landing.ejs"
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server Has Started!");
});

