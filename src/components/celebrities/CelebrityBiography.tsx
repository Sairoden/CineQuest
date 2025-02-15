export default function CelebrityBiography({
  celebrity,
}: {
  celebrity: {
    biography: string;
  };
}) {
  return (
    <>
      {celebrity.biography && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>

          <p className="text-gray-300 leading-relaxed">{celebrity.biography}</p>
        </div>
      )}
    </>
  );
}
