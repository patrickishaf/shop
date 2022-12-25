export default class Notification {
  title;
  description;
  type;
  hasTimeout;
  timeoutMillisecs;

  constructor(title, description, timeoutMillisecs=undefined, type = 'default') {
    this.type = type;
    this.title = title;
    this.description = description;
    if (timeoutMillisecs) {
      this.hasTimeout = true;
      this.timeoutMillisecs = timeoutMillisecs;
    } else {
      this.hasTimeout = false;
    }
  }

  static fromObject(object) {
    const { title, description, type } = object;
    return new Notification(title, description, type);
  }

  static fromJSON(jsonString) {
    const { title, description, type } = JSON.parse(jsonString);
    return new Notification(title, description, type);
  }
}

export class SuccessNotification extends Notification {
  title;
  description;
  type;

  constructor(title, description) {
    super(title, description, 'success');
  }
}

export class ErrorNotification extends Notification {
  title;
  description;
  type;

  constructor(title, description) {
    super(title, description, 'error');
  }
}