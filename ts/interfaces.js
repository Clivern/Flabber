var Mailer = /** @class */ (function () {
  function Mailer(server) {
    this.server = server;
  }
  Mailer.prototype.send = function (msg) {
    console.log(msg.subject);
    return true;
  };
  return Mailer;
})();
var msg = {
  subject: "Hello World",
};
var mailer = new Mailer("localhost");
mailer.send(msg);
