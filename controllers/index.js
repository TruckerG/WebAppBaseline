/**
 * Created by edgun_000 on 2014-12-26.
 * Initializes controllers in the controllers folder
 */
(function (controllers) {

    // Import controllers here
    var homeController = require("./homeController");

    controllers.init = function (app) {
        // Initialize controllers here
        homeController.init(app);
    };
})(module.exports);