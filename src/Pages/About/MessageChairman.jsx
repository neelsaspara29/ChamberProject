import React, { useEffect, useState } from "react";
import { ApiGet } from "../../Helper/API/Apidata";

const MessageChairman = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    await ApiGet("/msgpresident/get")
      .then((data) => {
        console.log("res", data.data.data);
        setData(data?.data?.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
             <div id="interior_content">


<div class="wrapper">
    <div id="content" class="rightpad">
      
        <div class="staffModule moduleDetail">
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <div class="thumbnail"  >
              <img style={{borderRadius: "50%", border: "3px solid red"}} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />
            </div>
            <h1 class="title" style={{color: "#0071b9", fontWeight: "600"}}>Dan Lindblade, CAE</h1>
            <h3 style={{color: "#00945e", fontWeight: "500px"}}>President & CEO</h3>
            </div>
            <div class="bio text-center">
                <p>Dan Lindblade, CAE, has over 30 years of organizational management experience on the national, state and local levels.&nbsp; He lobbies on behalf of business issues, is the spokesman for the organization, and leads the executive
                    management team from Chamber headquarters in Fort Lauderdale.&nbsp; Dan currently serves as the Chairman of the Housing Authority of the City of Fort Lauderdale, on the Orange Bowl Committee, the South Florida Business Council,
                    Winterfest Boat Parade Executive Committee, the Greater Fort Lauderdale Alliance, and the Broward County Racial Equity Council plus many other organizations.&nbsp; Dan has held positions of CEO, executive vice president, Director
                    of Government Affairs and Public Relations at organizations in Madison, WI, Orlando, Albuquerque, Fort Lauderdale and Lexington, KY.&nbsp; He is a Certified Association Executive (CAE) and was graduated from the University
                    of Wisconsin-Madison, with a BA in Journalism.</p>
            </div>
            <div class="phone d-flex justify-center" style={{color: "#0071b9"}}><a href="tel:954.462.4911"><span class="fa fa-phone-square"></span> 954.462.4911</a></div>
            <div class="email d-flex justify-center" style={{color: "#0071b9"}}><a href="mailto:dan@ftlchamber.com"><span class="fa fa-envelope"></span> dan@ftlchamber.com</a></div>
            <div class="clear"></div>
        </div>
    </div>



   

</div>

</div>
    </>
  );
};

export default MessageChairman;
