interface Message {
  subject: string;
}

interface IMailer {
  send(msg: Message): boolean;
}

class Mailer implements IMailer {
  private server: string;

  constructor(server: string) {
    this.server = server;
  }

  send(msg: Message): boolean {
    console.log(msg.subject);
    return true;
  }
}

var msg: Message = {
  subject: "Hello World",
};

var mailer: Mailer = new Mailer("localhost");
mailer.send(msg);
