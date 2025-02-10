import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { SeminarListItem } from "../Seminar/SeminarListItem/SeminarListItem";
import { seminarsListRequest } from "../../api/request";
import { TSeminar } from "../Seminar/seminar.types";

export function List() {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [list, setList] = useState<[TSeminar] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = await seminarsListRequest();
      setList(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {list.map((item) => (
        <SeminarListItem {...item} key={item.id} />
      ))}
    </div>
  );
}
