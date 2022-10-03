import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ApiGet } from "../../Helper/API/Apidata";

function Secretaries() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/team/fullTeam")
      .then((data) => {
        console.log("res-", data.data.data);
        setData(data?.data?.data?.secretariats);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="text-danger text-center mt-10 uppercase">
        <h1>Secretaries</h1>
      </div>
      <div className="w-3/5 m-auto mt-5">
        <div className="team_member">
          <div className="d-flex flex-wrap justify-evenly">
            {data?.map((single) => {
              return (
                <Card className="team_card" style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <div className="text-center">
                        <img
                          src="/Assets/team/1.jpg"
                          // width={150}
                          height={100}
                          className="m-auto w-4/5"
                        ></img>
                      </div>
                    </Card.Title>
                    <Card.Subtitle className="m-auto text-muted text-center">
                      <h4>
                        <b className="uppercase"> {single.name}</b>
                      </h4>
                    </Card.Subtitle>
                    <Card.Text>
                      <p className="uppercase">
                        {single.role ? single.role : " member of scci"}
                      </p>
                      <p>{single?.mobile}</p>
                      <p>{single?.email}</p>
                    </Card.Text>
                    <Card.Link href="#">
                      <span className="fa fa-twitter"></span>
                    </Card.Link>
                    <Card.Link href="#">
                      <span className="fa fa-facebook"></span>
                    </Card.Link>
                    <Card.Link href="#">
                      <span className="fa fa-instagram"></span>
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Secretaries;
