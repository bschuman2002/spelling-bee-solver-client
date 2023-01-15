import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});

export const solveSpellingBee = async (goldLetter, letters) => {
  const res = await instance.post("/solve", {
    letters: letters,
    gold_letter: goldLetter,
  });

  return res?.data;
};
