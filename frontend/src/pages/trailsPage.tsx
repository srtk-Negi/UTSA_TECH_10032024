import axios from "axios";
import { MapPin, Mountain, Ruler, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface TrailInterface {
  id: number;
  name: string;
  location: string;
  length: number;
  difficulty: string;
  description: string;
  image: string;
  rating: number;
}

const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center">
    <div className="text-green-600 mr-2">{icon}</div>
    <div className="text-gray-500">
      <p className="text-sm">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const TrailPage = () => {
  const [trail, setTrail] = useState<TrailInterface>();

  useEffect(() => {
    console.log("Fetching trail data...");
    axios
      .get("api/trails/trails")
      .then((response) => {
        setTrail(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {!trail ? (
        <div>Loading...</div>
      ) : (
        <div className="min-h-screen w-screen bg-gray-100">
          <div className="relative h-96">
            <img
              src={trail.image}
              alt={trail.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white text-center">
                {trail.name}
              </h1>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <InfoItem
                  icon={<Ruler />}
                  label="Distance"
                  value={`${trail?.length} miles`}
                />
                <InfoItem
                  icon={<Mountain />}
                  label="Difficulty"
                  value={trail.difficulty}
                />
                <InfoItem
                  icon={<MapPin />}
                  label="Location"
                  value={trail.location}
                />
                <InfoItem
                  icon={<Heart />}
                  label="Rating"
                  value={trail.rating.toString()}
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Trail Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {trail.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailPage;
