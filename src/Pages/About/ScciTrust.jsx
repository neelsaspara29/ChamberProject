import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";
import { FcDownload } from "react-icons/fc";

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
      <div className="w-4/5 mx-auto mt-12 pub" style={{ fontSize: "16px" }}>
        <p style={{ textAlign: "justify" }}>
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
        <div className="w-4/5 mx-auto  pub" style={{ fontSize: "16px" }}>
          <p style={{ textAlign: "justify" }}>
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
      <div className="w-4/5 mt-16 mx-auto activity_pub pub flow-root">
        {data?.map((single, idx) => {
          return (
            <div
              style={{ textAlign: (idx + 1) % 2 == 0 ? "right" : "left" }}
              class={(idx + 1) % 2 == 0 ? "city-box2" : "city-box1"}
            >
              <img src={single.photo} alt="Surat By Road" />
              {/* <h3 className="text-primary title2">Activity Name: </h3> */}
              <p className="text-gray-600 font-serif">{single.description}</p>
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
          contribution under 80g & csr
        </h1>
      </div>
      <div className="w-4/5 mt-2     mx-auto pub" style={{ fontSize: "16px" }}>
        <p className="" style={{ textAlign: "justify" }}>
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
      <div
        className=" d-flex gap-1 scci_certificate     justify-center"
        style={{ width: "95%" }}
      >
        <div>
          <h4 className="uppercase text-center text-primary">
            80g certificate
            <a href="/Assets/trutdoc/80G .jpg" download>
              {" "}
              <FcDownload
                className="inline bg-blue-200 p-1 text-3xl relative "
                style={{ top: "-2" }}
              />
            </a>
          </h4>
          <div className="p-2 m-1 border border-1">
            <img src="/Assets/trutdoc/80G .jpg" alt="" srcset="" />
          </div>
        </div>
        <div>
          <h4 className="uppercase text-center text-primary">
            csr certificate
            <a href="/Assets/trutdoc/CSR .jpg" download>
              {" "}
              <FcDownload
                className="inline bg-blue-200 p-1 text-3xl relative "
                style={{ top: "-2" }}
              />
            </a>
          </h4>
          <div className="p-2 m-1  border border-1 ">
            <img src="/Assets/trutdoc/CSR .jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScciTrust;
