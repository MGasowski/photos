import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const MyImage = (props) => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((current) => !current);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = `http://source.unsplash.com/${props.slug}`;
    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [props.slug]);

  if (loading) return <Skeleton />;

  return (
    <>
      <div
        className={`${
          modal ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50  flex justify-center items-center h-modal md:h-full md:inset-0 backdrop-blur-md`}
        onClick={handleModal}
      >
        <img
          className=" shadow-lg rounded-xl  max-h-full"
          src={`http://source.unsplash.com/${props.slug}`}
          alt={props.alt}
        />
      </div>
      <div className="m-4 h-full">
        <img
          className="hover:scale-105 transition-transform  shadow-lg rounded-xl  max-h-full"
          src={`http://source.unsplash.com/${props.slug}`}
          alt={props.alt}
          onClick={handleModal}
        />
      </div>
    </>
  );
};

export default MyImage;
