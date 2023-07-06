import axios from "./axios";
import type * as IFs from "../interfaces/spotify-music.interfaces";

export const spotifySearchApi = ({ params }: IFs.ISpotifySearchApi) =>
  axios.get("search/", { params });
