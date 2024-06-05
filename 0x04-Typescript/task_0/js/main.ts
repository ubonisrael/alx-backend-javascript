export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: "Ubonisrael",
  lastName: "Akpanudoh",
  age: 26,
  location: "Mars",
};
export const student2: Student = {
  firstName: "Joy",
  lastName: "Akpan",
  age: 27,
  location: "Venus",
};

export const arr: Student[] = [student1, student2];

export function renderStudentsTable(studentsArray: Student[]) {
  const body = document.body;
  const table = document.createElement("table");

  const tableHead = table.createTHead();
  const headRow = tableHead.insertRow();
  for (let i = 0; i < 2; i++) {
    const cell = headRow.insertCell();
    const cellText = i === 0 ? "FirstName" : "Location";
    cell.appendChild(document.createTextNode(cellText));
    cell.style.border = "1px solid black";
  }

  for (let i = 0; i < studentsArray.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 2; j++) {
      const cell = row.insertCell();
      const cellText =
        j === 0 ? studentsArray[i].firstName : studentsArray[i].location;
      cell.appendChild(document.createTextNode(cellText));
      cell.style.border = "1px solid black";
    }
  }
  body.appendChild(table);
}

renderStudentsTable(arr);
