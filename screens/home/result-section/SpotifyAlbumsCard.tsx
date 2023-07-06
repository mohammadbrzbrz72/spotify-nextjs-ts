import { DescribeText } from "@/components";

export interface ISpotifyAlbumsCard {
  name: string;
  date: { year: string };
  artists: {
    items: { uri: string; profile: { name: string } }[];
  };
  uri?: string;
  coverArt: {
    sources: { height: number; width: number; url: string }[];
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
    flex flex-col gap-y-1
    w-full h-[100px]
    px-3 mt-4
  `,
};

export default function SpotifyAlbumsCard({
  name,
  date,
  artists,
  coverArt,
}: ISpotifyAlbumsCard) {
  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        src={coverArt?.sources?.[0]?.url}
        alt={name}
      />
      <div className={styles.infoBox}>
        <DescribeText
          classes={{
            title: "w-[40px]",
          }}
          title="Name:"
          context={name}
        />
        <DescribeText
          classes={{
            title: "w-[40px]",
          }}
          title="Date:"
          context={date.year}
        />
        <DescribeText
          classes={{
            title: "w-[40px]",
          }}
          title="Artists:"
          context={artists.items[0].profile.name}
        />
      </div>
    </div>
  );
}
