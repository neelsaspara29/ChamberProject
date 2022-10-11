import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function Gallery() {
  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();
  const fetchData = async (id) => {
    await ApiPost("/gallaryEvent/get")
      .then((data) => {
        console.log("res-", data);

        let temp = data?.data?.data?.filter((item) => {
          return item._id == searchParams.get("id");
        });
        for (let i = 0; i < temp.length; i++) {
          temp[i].videos = temp[i].videos.map((item) =>
          `https://www.youtube.com/embed/${item}`
          );
        }
        console.log(temp);
        setData(temp[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData(searchParams.get("id"));
  }, []);
  return (
    <>
      <Header1 />
      <h3 className="text-center mt-5 uppercase">Video Gallery</h3>
      <div className="w-4/5 vedio_display d-flex flex-wrap mx-auto mt-2 justify-center overflow-x-scroll">
        {data &&
          data?.videos &&
          data?.videos?.map((single) => (
            <div>
              <iframe
                src={single}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />{" "}
            </div>
          ))}
      </div>
      <h3 className="text-center mt-12 uppercase">Picture Gallery</h3>
      <div className="w-4/5 image_display flex-wrap d-flex mx-auto mt-2 justify-center overflow-x-scroll">
        {data &&
          data?.images &&
          data?.images.map((single) => (
            <>
              <div className="img_o">
                <img src={single} width={250} height={250} alt="" />
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Gallery;
