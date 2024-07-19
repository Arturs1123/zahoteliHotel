import Link from "next/link";

export type CityThumbnailProps = {
  thumbnail?: string
  cityName?: string
  subdomain?: string
}

export default function CityThumbnail({ thumbnail = '', cityName = '', subdomain = '' }: CityThumbnailProps) {
  return (
    <div className="">
      <Link href={`https://${subdomain}`}>
        <img src={thumbnail} className="rounded-xl w-full object-cover md:h-[252px] h-[163.5px]" />
        <p className="md:text-2.5xl text-xl font-semibold">{cityName}</p>
      </Link>
    </div>
  );
}
