import CityThumbnail from "./CityThumbnail";
import LinkToMore from "./LinkToMore";
import { CityThumbnailProps } from "./CityThumbnail";

type CitiesInProps = {
  title: string;
  all_direction_url: string;
  cities: CityThumbnailProps[]
}

export default async function CitiesIn({ title = "title", all_direction_url = "url", cities = [] }: CitiesInProps) {
  return (
    <div className="md:py-[60px] py-[32px] mx-auto max-w-[1200px]">
      <div>
        <div className="md:flex md:flex-row md:justify-between items-center md:mb-5 mb-2">
          <p className="md:text-h2 text-h5">{title}</p>
          <LinkToMore className="md:block hidden" caption="Все направления" linkURL={all_direction_url} />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-7 mb-[20px]">
          {cities.map((city) => <CityThumbnail key={city.cityName} thumbnail={city.thumbnail} cityName={city.cityName} subdomain={city.subdomain} />)}
        </div>
      </div>
      <div className="text-center">
        <LinkToMore className="md:hidden block mx-auto" caption="Все направления" linkURL={all_direction_url} />
      </div>
    </div>
  );
}
