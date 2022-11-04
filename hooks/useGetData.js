// import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { API_URL } from "../config";
import Cookies from "js-cookie";
// import { useQuery } from "react-query";
// import { API_URL, token, id, identity_id } from "../../config";

function useGetData(route) {
  const { data } = useSession();
  const { token, id } = data ? data.user : "";

  // console.log("access data is", data);

  //with react-query
  // const url = `${API_URL}/${route}/${id}/${identity_id ? identity_id : ""}`;

  // const fetcher = async () => {
  //   const res = await fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const fetchedData = await res.json();

  //   console.log("fetched", fetchedData);
  //   return fetchedData.data;
  // };

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: fetchedData,
  // } = useQuery(route, fetcher);

  // return {
  //   fetchedData: fetchedData ? fetchedData : "",
  //   isLoading,
  //   isError,
  //   // error: error.data,
  // };

  const cookieId = Cookies.get("id");

  //with swr
  const fetcher = async (url) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const fetchedData = await res.json();

    // console.log("fetched", fetchedData);
    return fetchedData;
  };

  // const url = `${API_URL}${route}/${cookieId}`;
  const url = `${API_URL}${route}/${id}`;
  // const url = `${API_URL}${route}/0388b9b5-6d20-4de9-9411-660cfb5b6eb7`;
  // console.log(url);

  const { data: fetchedData, error } = useSWR(url, fetcher);

  return {
    fetchedData: fetchedData ? fetchedData : "",
    isLoading: !error && !fetchedData,
    isError: error,
  };
}

export default useGetData;
