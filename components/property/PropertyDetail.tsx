interface Property {
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  amenities: string[];
}

const PropertyDetail: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={property.image} alt={property.name} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-2xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="mb-6">{property.description}</p>
      <p className="text-lg font-semibold mb-4">Price per night: ${property.price}</p>
      <div>
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
