import type { Dispatch, SetStateAction } from "react";

export function getArtistsAndAlbums(data: any) {
  const { albums, artists } = data ?? {};

  const albumsData: any[] = albums?.items ?? [];
  const artistsData: any[] = artists?.items ?? [];

  return { albumsData, artistsData };
}

export const searchData = () => ({
  inputText: "",
  lastSearch: "",
  switch(refresh: () => void) {
    if (this.enabled) {
      this.enabled = this.inputText === this.lastSearch;
    } else {
      this.enabled = this.inputText !== this.lastSearch;
    }

    this.lastSearch = this.inputText;
    refresh();
  },
  enabled: false,
});
