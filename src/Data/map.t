export default function Map() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">
      <iframe
        title="Location map"
        src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
        className="w-full h-72 md:h-96"
        loading="lazy"
      />
    </div>
  );
}