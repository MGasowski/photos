import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../PageContext";
import MyImage from "./Image";

const Gallery = () => {
  const [urls, setUrls] = useState();
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://picsum.photos/v2/list?limit=3&page=${page}`)
        .then(({ data }) => {
          setUrls(data);
          setLoading(false);
        });
    };

    getData();
  }, [page]);

  if (loading || !urls) return "Loading...";

  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center h-2/3   mb-6  overflow-scroll md:overflow-hidden pt-4">
      {urls.map((el) => (
        <MyImage
          slug={el.url.split("/").pop()}
          key={el.id}
          alt={el.author}
          width={el.width}
          height={el.height}
        />
      ))}
    </div>
  );
};

export default Gallery;
