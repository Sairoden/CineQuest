export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;

    const personUrl = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
    const taggedImagesUrl = `https://api.themoviedb.org/3/person/${id}/tagged_images?page=1`;

    fetch(
      "https://api.themoviedb.org/3/person/1245/combined_credits?language=en-US"
    );

    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    };

    const [personResponse, taggedImagesResponse] = await Promise.all([
      fetch(personUrl, { headers }),
      fetch(taggedImagesUrl, { headers }),
    ]);

    if (!personResponse.ok || !taggedImagesResponse.ok) {
      throw new Error(
        `Failed to fetch data: Person ${personResponse.status}, Tagged Images ${taggedImagesResponse.status}`
      );
    }

    const [personData, taggedImagesData] = await Promise.all([
      personResponse.json(),
      taggedImagesResponse.json(),
    ]);

    const uniqueMediaMap = new Map();

    interface TaggedImageItem {
      media: {
        title?: string;
        name?: string;
        overview?: string;
        poster_path?: string | null;
      };
    }

    taggedImagesData.results.forEach((item: TaggedImageItem) => {
      const mediaTitle = item.media?.title || item.media?.name;

      if (mediaTitle) {
        if (!uniqueMediaMap.has(mediaTitle)) {
          uniqueMediaMap.set(mediaTitle, {
            title: mediaTitle,
            overview: item.media?.overview || "",
            poster_path: item.media?.poster_path || null,
          });
        }
      }
    });

    const uniqueMediaItems = Array.from(uniqueMediaMap.values());

    const finalData = {
      biography: personData.biography || "",
      birthday: personData.birthday || null,
      known_for_department: personData.known_for_department || "",
      name: personData.name || "",
      place_of_birth: personData.place_of_birth || null,
      popularity: personData.popularity || 0,
      profile_path: personData.profile_path || null,
      media: uniqueMediaItems,
    };

    return Response.json(finalData);
  } catch (error) {
    console.error("Error fetching celebrity data:", error);
    return Response.json(
      { error: "Failed to fetch celebrity data" },
      { status: 500 }
    );
  }
};
