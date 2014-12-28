/**
 * Created by edgun_000 on 2014-12-26.
 * Example of controller on home route (/)
 * fetches some data from a repository
 */

(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {
        app.get("/", function (req, res){
            data.repository.getGreetings(function (err, results) {
                res.render("index", {title: "Is this it?", error: err, greetings: results.greetings });
            });
        });
    };
})(module.exports);