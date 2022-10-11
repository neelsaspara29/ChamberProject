import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function ScciTrust() {
  const [data, setData] = useState([]);
  const [totalpage, settotalpage] = useState(0);
  const [active, setActive] = useState(1);

  const fetchData = async (page, limit) => {
    await ApiPost("/trustActivity", {
      page: page,
      limit: limit,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.trustActivitysData);
        settotalpage(data?.data?.data?.state?.page_limit);
      })
      .catch((err) => console.log(err));
  };
  const handleChangePagination = (page) => {
    setActive(page);
    fetchData(page, 5);
  };
  useEffect(() => {
    fetchData(1, 5);
  }, []);

  return (
    <>
      <Header1 />
      <div>
        <h1 className="text-danger title2  text-center my-3 uppercase">
          saurashtra chamber trust
        </h1>
      </div>
      <div className="w-3/4 mx-auto mt-12 pub" style={{ fontSize: "16px" }}>
        <p className="text-center text-red-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          qui. Cumque, amet deserunt quisquam dolore eius tempore quo nam
          eligendi nemo quae! Doloremque aliquid laboriosam tenetur soluta
          voluptatem deleniti ipsum quo? Enim quis labore reiciendis modi,
          veniam, ipsam at nihil fuga autem porro, beatae facere ad voluptas
          ipsum quidem fugiat excepturi natus sapiente illum velit aperiam
          repellat esse blanditiis. Quo. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laborum itaque quia quos. Cum soluta facilis
          doloribus nihil porro non nam ducimus quod labore modi ut magni
          incidunt harum vel totam, quam mollitia reprehenderit culpa amet eos!
          Libero nulla dignissimos molestiae.
        </p>
      </div>
      <div>
        <h1 className="text-primary title2  text-center mt-12 uppercase">
          Activities
        </h1>
        <div className="w-3/4 mx-auto  pub" style={{ fontSize: "16px" }}>
          <p className="text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            qui. Cumque, amet deserunt quisquam dolore eius tempore quo nam
            eligendi nemo quae! Doloremque aliquid laboriosam tenetur soluta
            voluptatem deleniti ipsum quo? Enim quis labore reiciendis modi,
            veniam, ipsam at nihil fuga autem porro, beatae facere ad voluptas
            ipsum quidem fugiat excepturi natus sapiente illum velit aperiam
            repellat esse blanditiis. Quo. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Laborum itaque quia quos. Cum soluta
            facilis doloribus nihil porro non nam ducimus quod labore modi ut
            magni incidunt harum vel totam, quam mollitia reprehenderit culpa
            amet eos! Libero nulla dignissimos molestiae.
          </p>
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto pub flow-root">
        {data?.map((single, idx) => {
          return (
            <div class={(idx + 1) % 2 == 0 ? "city-box2" : "city-box1"}>
              <img src={single.photo} alt="Surat By Road" />
              {/* <h3 className="text-primary title2">Activity Name: </h3> */}
              <p>{single.description}</p>
            </div>
          );
        })}
      </div>
      <div className="w-4/5 mt-4 mx-auto pub flow-root">
        <Pagination className="mt-2">
          {Array.from({ length: totalpage }, (_, index) => index + 1)?.map(
            (item) => (
              <Pagination.Item
                key={item}
                onClick={() => handleChangePagination(item)}
                active={item === active}
              >
                {item}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
      <div>
        <h1 className="text-danger title2  text-center mt-12 uppercase">
          contribution under sogrcsr
        </h1>
      </div>
      <div className="w-3/4 mt-2     mx-auto pub" style={{ fontSize: "16px" }}>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          qui. Cumque, amet deserunt quisquam dolore eius tempore quo nam
          eligendi nemo quae! Doloremque aliquid laboriosam tenetur soluta
          voluptatem deleniti ipsum quo? Enim quis labore reiciendis modi,
          veniam, ipsam at nihil fuga autem porro, beatae facere ad voluptas
          ipsum quidem fugiat excepturi natus sapiente illum velit aperiam
          repellat esse blanditiis. Quo. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laborum itaque quia quos. Cum soluta facilis
          doloribus nihil porro non nam ducimus quod labore modi ut magni
          incidunt harum vel totam, quam mollitia reprehenderit culpa amet eos!
          Libero nulla dignissimos molestiae.
        </p>
      </div>
      <div className="w-100 d-flex  scci_certificate     justify-center">
        <div>
          <h4 className="uppercase text-center text-primary">
            sog certificate
          </h4>
          <div className="p-2">
            <img src="/Assets/Events/event1.jpg" alt="" srcset="" />
          </div>
        </div>
        <div>
          <h4 className="uppercase text-center text-primary">
            csr certificate
          </h4>
          <div className="p-2">
            <img src="/Assets/Events/event1.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScciTrust;
