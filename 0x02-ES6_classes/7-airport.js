import util from 'util';

export default class Airport {
  constructor(name, code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  [util.inspect.custom]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
