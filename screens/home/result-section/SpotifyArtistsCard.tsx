"use client";

import { DescribeText } from "@/components";

export interface ISpotifyArtistsCard {
  profile?: { name: string };
  uri?: string;
  visuals: {
    avatarImage: { sources: { height: number; width: number; url: string }[] };
  };
}

const styles = {
  main: `
    w-[250px] h-[300px]
    rounded-md
    overflow-x-hidden
    bg-white
  `,
  img: `
    w-full h-[150px]
    object-center object-cover
  `,
  infoBox: `
    w-full h-[100px]
    px-3 mt-4
  `,
};

export default function SpotifyArtistsCard({
  profile,
  uri,
  visuals,
}: ISpotifyArtistsCard) {
  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        src={visuals.avatarImage.sources[0]?.url}
        alt={profile?.name}
      />
      <div className={styles.infoBox}>
        <DescribeText title="name:" context={profile?.name} />
      </div>
    </div>
  );
}
