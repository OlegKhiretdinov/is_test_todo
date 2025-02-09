import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { seminarsListRequest } from "../../api/request";
import { ListItem } from "../ListItem/ListItem";
import { TSeminar } from "../Seminar/seminar.types";
import { SeminarListItem } from "../Seminar/SeminarListItem/SeminarListItem";

export function List() {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [list, setList] = useState<[TSeminar] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

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
        <ListItem
          key={item.id}
          deleteHandler={() => {
            console.log(item.id);
          }}
          editHandler={() => {
            console.log(item.id);
          }}
        >
          <SeminarListItem {...item} />
        </ListItem>
      ))}
    </div>
  );
}
