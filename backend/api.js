import { BASE_URL } from "./base_url";
import { fetchData } from "../helpers/fetchData";

export const getAllUnits = () => fetchData(`${BASE_URL}/units`);

export const getAllChefer = (unitId) =>
  fetchData(`${BASE_URL}/units/${unitId}/chefer`);

export const getAllSpecialister = (unitId) =>
  fetchData(`${BASE_URL}/units/${unitId}/specialister`);

export const getAllTasks = (unitId) =>
  fetchData(`${BASE_URL}/units/${unitId}/tasks`);

export const getAllWorkplaces = (unitId) =>
  fetchData(`${BASE_URL}/units/${unitId}/workplaces`);

export const getAllCleaners = (unitId, workPlaceId) =>
  fetchData(`${BASE_URL}/units/${unitId}/workplaces/${workPlaceId}/cleaners`);
