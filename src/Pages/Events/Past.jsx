import moment from "moment/moment";
import React, { useEffect, useState } from "react";
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
function Past() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/event/get", {
      type: "1",
    })
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
      <div className="text-danger text-center p-3">
        <h3> PAST EVENTS </h3>
      </div>
      <div className=" w-2/3 m-auto upcoming_events">
        {data?.map((arr) => {
          return (
            <div>
              <div className="mb-5 mt-3">
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
                  <div className="d-flex flex-row-reverse flex-wrap mt-3 ml-3">
                    <div>
                      {single.image ? (
                        <img
                          src={single.image}
                          width={200}
                          height={200}
                          alt="Not Valid Image"
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
        <div>
          <div className="mb-5 mt-3">
            <h4>
              <b> June 2021</b>
            </h4>
          </div>
          <div className="d-flex flex-row-reverse flex-wrap mt-3 ml-3">
            <div>
              <img
                src="/Assets/Events/event1.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>

            <div className="px-4" style={{ minWidth: "65%", maxWidth: "65%" }}>
              <p style={{ paddingBottom: "4px" }}> June 5@ 8.00 am-5 pm</p>
              <p>
                <h5>
                  <b> Conference </b>
                </h5>
              </p>
              <p style={{ paddingBottom: "10px" }}>
                <b> Farmer's Protest Discussion </b>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                et placeat quos maiores perspiciatis ipsam architecto sapiente
                tempora culpa consequuntur ratione, sint quaerat. Obcaecati
                inventore amet vitae cum natus! Perferendis, mollitia facilis?
              </p>
            </div>
            <div className="mr-2 text-center">
              <p>
                <b> SAT</b>
              </p>
              <p>5</p>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mt-3 ml-3">
            <div className="mr-2 text-center">
              <p>
                <b> SAT</b>
              </p>
              <p>5</p>
            </div>
            <div className="px-4" style={{ minWidth: "60%", maxWidth: "60%" }}>
              <p style={{ paddingBottom: "4px" }}> June 5@ 8.00 am-5 pm</p>
              <p>
                <h5>
                  <b> Conference </b>
                </h5>
              </p>
              <p style={{ paddingBottom: "10px" }}>
                <b> Farmer's Protest Discussion </b>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                et placeat quos maiores perspiciatis ipsam architecto sapiente
                tempora culpa consequuntur ratione, sint quaerat. Obcaecati
                inventore amet vitae cum natus! Perferendis, mollitia facilis?
              </p>
            </div>
            <div>
              <img
                src="/Assets/Events/event1.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Past;
