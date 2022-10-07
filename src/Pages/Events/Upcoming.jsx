import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Header1 from "../../Components/Header/Header1";
import { ApiGet, ApiPost } from "../../Helper/API/Apidata";
import "../../Styles/Components/events.scss";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thusday",
  "friday",
  "saturday",
];
function Upcoming() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/event/get", { type: "0" })
      .then((data) => {
        console.log("res-", data.data.data);
        let temp = data.data.data;
        let main_arr = [];
        let temp_arr = [temp[0]];
        for (let i = 1; i < temp.length; i++) {
          if (
            new Date(temp[i].time).getMonth() ==
            new Date(temp[i - 1].time).getMonth()
          )
            temp_arr.push(temp[i]);
          else {
            main_arr.push(temp_arr);
            temp_arr = [];
            temp_arr.push(temp[i]);
          }
        }
        main_arr.push(temp_arr);
        console.log("asd", main_arr);

        setData(main_arr);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header1 />
      <div className="text-danger title2 text-center p-3">
        <h3 className="text-danger title2"> UPCOMING EVENTS </h3>
      </div>
      <div className=" w-2/3 m-auto upcoming_events">
        {data?.map((arr) => {
          return (
            <div className="event_one">
              <div className="" style={{ marginTop: "14px" }}>
                <h4>
                  <b>
                    {" "}
                    {monthNames[new Date(arr[0].time).getMonth()] +
                      " " +
                      new Date(arr[0].time).getFullYear()}
                  </b>
                </h4>
              </div>
              {arr.map((single) => {
                return (
                  <div className="d-flex flex-row-reverse flex-wrap mt-12 ml-3 individual_event">
                    <div>
                      {single.image ? (
                        <img
                          src={single.image}
                          width={200}
                          height={200}
                          alt="Not Valid Image"
                          className="mobile_img_resp"
                        />
                      ) : (
                        <img
                          src="/Assets/Events/event1.jpg"
                          width={200}
                          height={200}
                          alt=""
                        />
                      )}
                    </div>

                    <div
                      className="px-4 "
                      style={{ minWidth: "65%", maxWidth: "65%" }}
                    >
                      <p style={{ paddingBottom: "4px" }}>
                        {" "}
                        {moment(single.time).format("Do MMMM YYYY")}
                      </p>
                      <p>
                        <h5>
                          <b> {single.place} </b>
                        </h5>
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <b> {single.name} </b>
                      </p>

                      <p>{single.brifIntro}</p>
                    </div>
                    <div className="mr-2 text-center">
                      <p>
                        <b className="uppercase">
                          {days[new Date(single.time).getDay()]}
                        </b>
                      </p>
                      <p>{new Date(single.time).getDate()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Upcoming;
