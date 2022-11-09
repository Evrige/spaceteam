import axios from "axios";
import {HOST_CRAFT_COORDINATE, HOST_SPACEMAN_NAMES} from "../config/config";
import getData from "./getData";

export const getCoordinateData = async () => {
  const response = await axios.get(HOST_CRAFT_COORDINATE)
  return response.data.iss_position;
}

export const getSpacemanName = async () => {
  const response = await getData(HOST_SPACEMAN_NAMES)
  return findSpacemanOnISS(response.data.people)
}

function findSpacemanOnISS(list){
  return list.filter(people => people.craft === 'ISS')
}

