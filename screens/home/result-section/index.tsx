import React from "react";
import clsx from "clsx";

import { PuffLoaderSpinner } from "@/components";

import EmptyBox from "./EmptyBox";
import SpotifyArtistsCard, { ISpotifyArtistsCard } from "./SpotifyArtistsCard";
import SpotifyAlbumsCard, { ISpotifyAlbumsCard } from "./SpotifyAlbumsCard";

interface IResultSection {
  albumsData: any[];
  artistsData: any[];
  loading: boolean;
}

const styles = {
  main: `
    px-10 py-8
    w-full min-h-[500px]
    bg-gray-100
    py-3
  `,
  resultBox: `
    flex flex-wrap gap-10
    w-full h-full
  `,
  empty: `
    flex justify-center items-center
  `,
};

export default function ResultSection({
  albumsData,
  artistsData,
  loading,
}: IResultSection) {
  const isEmpty = !(albumsData?.length || artistsData?.length);

  return (
    <div className={clsx(styles.main, isEmpty && styles.empty)}>
      <PuffLoaderSpinner loading={loading}>
        <div className={clsx(styles.resultBox, isEmpty && styles.empty)}>
          {isEmpty ? (
            <EmptyBox />
          ) : (
            <>
              {albumsData?.map(({ data }: { data: ISpotifyAlbumsCard }) => {
                return <SpotifyAlbumsCard {...data} />;
              })}
              {artistsData?.map(({ data }: { data: ISpotifyArtistsCard }) => {
                return <SpotifyArtistsCard {...data} />;
              })}
            </>
          )}
        </div>
      </PuffLoaderSpinner>
    </div>
  );
}
