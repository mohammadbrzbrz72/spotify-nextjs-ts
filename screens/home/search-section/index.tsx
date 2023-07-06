"use client";

// built-in package
import React, { useRef } from "react";
import { getSpotifySearchQuery } from "@/services/queries/spotify.rq";

// root import
import { Input, SubmitButton } from "@/components";
import { useRefresh } from "@/hooks";

// local import
import { getArtistsAndAlbums, searchData } from "./tools";
import { initialParams } from "./data";
import ResultSection from "../result-section";

const styles = {
  main: `
    flex justify-center items-center
    h-[70px]
    bg-gray-300
    px-5
  `,
  inputBox: `
    flex items-center justify-between 
    w-full md:max-w-[750px] h-[45px]
    rounded-3xl
    bg-white 
    py-1 pr-1 
  `,
  searchInput: `
    h-full grow
  `,
  searchButton: `
    h-full rounded-3xl w-[110px] ml-5
  `,
};

export default function SearchSection() {
  const [refresh] = useRefresh();
  // It's better to use useRef here because we don't need to update the input with state
  const searchDataRef = useRef(searchData());
  const { isLoading, data, isFetching } = getSpotifySearchQuery(
    initialParams,
    searchDataRef.current.lastSearch,
    searchDataRef.current.enabled
  );
  const loading = isLoading && isFetching;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.inputBox}>
          <Input
            className={styles.searchInput}
            placeholder="Search for artist or album title"
            disabled={loading}
            onChange={(e) => {
              searchDataRef.current.inputText = e.target.value;
            }}
          />
          <SubmitButton
            className={styles.searchButton}
            loading={loading}
            onClick={() => {
              searchDataRef.current.switch(refresh);
            }}
          >
            SEARCH
          </SubmitButton>
        </div>
      </div>
      <ResultSection loading={loading} {...getArtistsAndAlbums(data?.data)} />
    </>
  );
}
