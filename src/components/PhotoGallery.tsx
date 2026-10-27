import team1 from "@/assets/team-1.webp";
import team3 from "@/assets/team-3.webp";
import team4 from "@/assets/team-4.webp";
import vehicle from "@/assets/vehicle.webp";
import team5 from "@/assets/team-5.webp";
import team6 from "@/assets/team-6.webp";

const photos = [
  { src: team1, alt: "Security team officers" },
  { src: team3, alt: "Armed response team" },
  { src: team4, alt: "Security officers on patrol" },
  { src: vehicle, alt: "Armed response vehicle" },
  { src: team5, alt: "Security operations" },
  { src: team6, alt: "Professional security team" },
];

export default function PhotoGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {photos.map(({ src, alt }) => (
        <div key={alt} className="group overflow-hidden rounded-lg">
          <img src={src} alt={alt} loading="lazy" decoding="async"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      ))}
    </div>
  );
}