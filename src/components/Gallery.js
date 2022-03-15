import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../PageContext";
import MyImage from "./Image";

const Gallery = (props) => {
  const [urls, setUrls] = useState();
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://picsum.photos/v2/list?limit=3&page=${page}`)
        .then(({ data }) => {
          const slugs = data.map((e) => e.url.split("/").pop());
          setUrls(slugs);
          setLoading(false);
        });
    };

    getData();
  }, [page]);

  if (loading || !urls) return "Loading...";

  return (
    <div className="flex justify-center  items-center h-2/3 mb-6  ">
      {urls.map((el) => (
        <MyImage slug={el} key={el} alt={el} />
      ))}
    </div>
  );
};

export default Gallery;
