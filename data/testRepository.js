/**
 * Created by edgun_000 on 2014-12-26.
 */

(function (repository) {
    repository.getGreetings = function (next) {
        next(null, {greetings:[{
            text: "hi!"
        }, {
            text: "hello world!"
        }, {
            text: "meet and greet!"
        }]});
    };
})(module.exports);