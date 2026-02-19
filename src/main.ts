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
  const getFormValues = function (e: any, arr: Ticket[]) {
    e.preventDefault()
    const nameInput = document.getElementById(`inputName`) as HTMLFormElement;
    const tourName: string = nameInput.value;
    const typeInput = document.getElementById(`inputType`) as HTMLFormElement;
    const tourType: string = typeInput.value;
    const pieceInput = document.getElementById(`inputPiece`) as HTMLFormElement;
    const tourPiece: string = pieceInput.value;
    console.log(arr)

    const tour: Ticket = arr[Number(tourType)];
    if (tour.max < Number(tourPiece)) {
      throw new Error(`Nincs eleg jegy. Te ennyit szeretnel vasarolni: ${tourPiece}. Ennyi a maximalis elerheto jegy: ${tour.max}`);
    } else {
      appendTourToTable(tourName, tour.name, Number(tourPiece), tour.price)
    };
  };
  document.getElementById("tourForm")?.addEventListener(`submit`, (e) => getFormValues(e, arr)) // Ezt AI-al csinaltam, nem tudtam, hogy hogyan kell;
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



const appendTourToTable = function (name: string, type: string, piece: number, price: number) {
  const tableBody = document.getElementById(`tableBody`);
  const tr = document.createElement(`tr`);
  tableBody?.appendChild(tr);
  const tdName = document.createElement(`td`);
  const tdType = document.createElement(`td`);
  const tdPrice = document.createElement(`td`);
  tdName.textContent = name;
  tdType.textContent = `${type} (${piece})`;
  tdPrice.textContent = `${price * piece}`;
  tr.appendChild(tdName);
  tr.appendChild(tdType);
  tr.appendChild(tdPrice);

  const totalPriceElement = document.getElementById(`totalPrice`) as HTMLElement;
  const totalPrice: string | undefined = totalPriceElement?.textContent;
  let tprice: number = 0;
  if (totalPrice?.trim() != `` || totalPrice != null || totalPrice != undefined) {
    tprice == Number(totalPrice);
  };
  tprice += (piece * price) + Number(totalPrice);
  totalPriceElement.textContent = `${tprice}`;
};

document.addEventListener("DOMContentLoaded", init);
