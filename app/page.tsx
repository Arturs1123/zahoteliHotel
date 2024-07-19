import CitiesIn from "./components/CitiesIn";
import PopularExcursions from "./components/PopularExcursions";
import OurServices from "./components/OurServices";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import HeaderBanner from "./components/HeaderBanner";
import SearchBar from "./components/SearchBar";
import CategoryList from "@/components/CategoryList";
import {
  getTypicalCitiesInRussia,
  getTypicalCitiesInAbkhazia,
  getRecommendedPlaces,
  getExcursionCategories,
} from "./backend_apis";

const findItems = [
  { icon: '/icons/svg/House.svg', label: 'Отели' },
  { icon: '/icons/svg/routing.svg', label: 'Экскурсии' },
]

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const search = searchParams?.search || '';
  const citiesInRussia = await getTypicalCitiesInRussia()
  const citiesInAbkhazia = await getTypicalCitiesInAbkhazia()
  const recommendedPlaces = await getRecommendedPlaces(search)
  const excursionCategories = await getExcursionCategories()

  return (
    <div>
      <HeaderBanner />
      <CategoryList items={findItems} className="mb-[20px] mx-auto max-w-[1200px]" />
      <SearchBar className="mb-[34px] mx-auto max-w-[1200px]" places={recommendedPlaces} />
      <Banner />
      <CitiesIn title="Путеводитель по России" all_direction_url={`https://${citiesInRussia.domainForAllDirections}`} cities={citiesInRussia.data} />
      <CitiesIn title="Путеводитель по Абхазии" all_direction_url={`https://${citiesInAbkhazia.domainForAllDirections}`} cities={citiesInAbkhazia.data} />
      <PopularExcursions title="Популярные экскурсии" all_direction_url="url" places={[]} categories={excursionCategories} />
      <OurServices />
      <Articles />
    </div>
  );
}
