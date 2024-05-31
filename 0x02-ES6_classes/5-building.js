export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (
        this.evacuationWarningMessage === 'undefined'
        || typeof this.evacuationWarningMessage !== 'function'
      ) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }
}
