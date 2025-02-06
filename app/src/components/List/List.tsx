import { useEffect, useState } from "react";

export function List() {
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return !isLoading && "List";
}
