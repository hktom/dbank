import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  console.log("window loaded");
  const currentAmount = await dbank.checkBalance();
  // document.getElementById("value").innerText = currentAmount;
});
