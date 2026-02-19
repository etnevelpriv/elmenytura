import "./style.css";
import type { Ticket } from "./Ticket";

const getFetchTickets = async function (): Promise<Ticket[]> {
  try {
    const resp = await fetch("./tickets.json");
    const data = await resp.json() as Ticket[];
    return data;
  } catch (err: any) {
    throw new Error(err);
  };
};

const init = async function () {
  const arr: Ticket[] = await getFetchTickets();
  console.log(arr);
  fillFormOptions(arr);
};

const fillFormOptions = function (arr: Ticket[]) {
  const options: string[] = [];
  arr.forEach((element: Ticket) => {
    options.push(element.name);
  });
  console.log(options);

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    optionElement.value = `${i}`;
    console.log(optionElement);
    const select = document.getElementById("inputType")
    select?.appendChild(optionElement);
  }

};

const getFormValues = function (e: any) {
  e.preventDefault()
  const nameInput = document.getElementById(`inputName`) as HTMLFormElement;
  const tourName: string = nameInput.value;
  const typeInput = document.getElementById(`inputType`) as HTMLFormElement;
  const tourType: string = typeInput.value;
  const pieceInput = document.getElementById(`inputPiece`) as HTMLFormElement;
  const tourPiece: string = pieceInput.value;
  appendTourToTable(tourName, tourType, tourPiece)
  // console.log(tourName);
};

const appendTourToTable = function (name: string, type: string, piece: string) {
  const tableBody = document.getElementById(`tableBody`);
  const tr = document.createElement(`tr`);
  tableBody?.appendChild(tr);
  const tdName = document.createElement(`td`);
  const tdType = document.createElement(`td`);
  const tdPiece = document.createElement(`td`);
  tdName.textContent = name;
  tdType.textContent = type;
  tdPiece.textContent = piece;
  tr.appendChild(tdName);
  tr.appendChild(tdType);
  tr.appendChild(tdPiece);
};

document.addEventListener("DOMContentLoaded", init);
document.getElementById("tourForm")?.addEventListener(`submit`, getFormValues)