import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    // console.log("Data from API recieved", data);
    return data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
