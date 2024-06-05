export interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

export interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}


export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home'
    }
    getCoffeeBreak() {
        return 'Getting a coffee break'
    };
    workDirectorTasks() {
        return 'Getting to director tasks'
    };
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home'
    }
    getCoffeeBreak() {
        return 'Cannot have a break'
    };
    workTeacherTasks() {
        return 'Getting to work'
    };
}

export function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director()
}

export function isDirector(employee: any): employee is Director {
    return employee.workFromHome() === 'Working from home'
}

export function executeWork(employee: Director | Teacher) {
    if (employee instanceof Director) {
        employee.workDirectorTasks()
    } else {
        employee.workTeacherTasks()
    }
}
export type Subjects = 'Math' | 'History'

export function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
