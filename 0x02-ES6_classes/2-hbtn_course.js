export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    this._students = [];
    if (Array.isArray(students)) {
      for (const x of students) {
        if (typeof x === 'string') {
          this._students.push(x);
        } else {
          throw new TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    const arr = [];
    if (Array.isArray(value)) {
      for (const x of value) {
        if (typeof x === 'string') {
          arr.push(x);
        } else {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = [...arr];
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
