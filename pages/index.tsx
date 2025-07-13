// pages/index.tsx
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants/index";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src="/images/beach.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="my-6 px-4 flex gap-3 flex-wrap justify-center">
        {FILTERS.map((filter, i) => (
          <Pill key={i} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
          <div key={property.id} className="shadow-md p-4 rounded">
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={250}
              className="rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{property.name}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-blue-600 font-bold">${property.price}/night</p>
            <p className="text-yellow-500">⭐ {property.rating}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
