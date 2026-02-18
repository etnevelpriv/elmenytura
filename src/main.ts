import "./style.css";

const getFetchTickets = async function () {
  const ticketPromise = new Promise(async (resolve, reject) => {
    try {
      const resp = await fetch("./tickets.json");
      const data = await resp.json();
      resolve(data);
    } catch (err: any) {
      reject(new Error(err))
    };
  });
  return (ticketPromise);
};

const init = async function () {
  const arr = await getFetchTickets()
  console.log(arr)
};

document.addEventListener("DOMContentLoaded", init);