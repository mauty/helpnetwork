import clsx from "clsx";
import React from "react";
import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";

export default function FilterButton({ type, currentData, setData }) {
  const { data } = useQuery(type, () =>
    useAxios({ url: `/${type}`, method: "get" })
  );

  return data
    ? data.map((data) => (
        <button
          key={data.id}
          className={clsx(
            "btn btn-xs btn-primary m-1",
            currentData.includes(data.id) && "btn-error"
          )}
          onClick={() =>
            setData((prevState) => {
              if (prevState.includes(data.id)) {
                return prevState.filter((id) => data.id !== id);
              }

              return [...prevState, data.id];
            })
          }
        >
          {data.name}
        </button>
      ))
    : null;
}
