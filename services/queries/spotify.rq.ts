import { useQuery } from "@tanstack/react-query";

import * as spotifyApis from "../apis/spotify-music.api";
import type * as IFs from "../interfaces/spotify-music.interfaces";

export function getSpotifySearchQuery(
  _data: IFs.ISpotifySearchApi,
  query: string,
  enabled: boolean
) {
  const result = useQuery({
    queryKey: ["repoData", query],
    queryFn: () => {
      const data = {
        params: {
          q: query,
          ..._data.params,
        },
      };

      if (query?.length <= 2) {
        data.params.q = "";
        return spotifyApis.spotifySearchApi(data);
      }

      return spotifyApis.spotifySearchApi(data);
    },
    enabled,
  });

  return result;
}
