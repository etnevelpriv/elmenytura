import "./style.css";

const getFetchTickets = async function () {
  const ticketPromise = new Promise(async (resolve, reject) => {
    try {
      const resp = await fetch("./tickets.json");
      const data = await resp.json();
      console.log(data);
    } catch (err:any) {
      reject(new Error(err))
    };
  });
  return(ticketPromise);

};

const init = function () {
  getFetchTickets()
};

document.addEventListener("DOMContentLoaded", init);