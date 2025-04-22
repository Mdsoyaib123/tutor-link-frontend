/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllTutors = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/tutors`,
      {
        cache: "no-store",
      }
    );
    console.log(res, "res");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error: any) {
    return Error("error to fetch data", error?.message);
  }
};
