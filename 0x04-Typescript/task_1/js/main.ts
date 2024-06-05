export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName[0]}. ${lastName}`;

export interface studentClassInterface {
  workOnHomeWork: () => string;
  displayName: () => string;
}

export class StudentClass implements studentClassInterface {
  private firstName!: string;
  private lastName!: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
