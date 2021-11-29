import { sendApiRequest } from './api.js'

const searchButton = document.querySelector("#search");


searchButton.addEventListener("click", async () => {
  await sendApiRequest();
});
