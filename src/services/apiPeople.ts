export const getPopularPeople = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/people`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getPeople = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/people/${id}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
