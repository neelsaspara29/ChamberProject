import React from "react";
import Header1 from "../../Components/Header/Header1";

function ProcedureCoo() {
  return (
    <>
      <Header1 />
      <div className="text-danger text-center my-4 uppercase">
        <h2>procedure</h2>
      </div>
      <div
        className="w-3/4  m-auto pub text-center"
        style={{ fontSize: "16px" }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quaerat
        quia aspernatur voluptatum repudiandae, iste soluta earum est nobis,
        officiis fugiat vel blanditiis ut ea nemo tenetur repellat dolore
        deserunt modi ullam? Rem, quidem?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aut provident quibusdam quia exercitationem itaque,
        alias nihil sequi impedit harum excepturi aliquid quasi tempora quae ea
        est accusantium. Maiores architecto perferendis alias, id placeat cum
        tempora amet esse dignissimos, temporibus magni. Non, in recusandae?
        Ullam eius magnam eveniet vitae maiores, temporibus hic asperiores at
        cumque magni amet, rerum accusantium! Illo quasi sunt exercitationem qui
        id corrupti quibusdam ad nam cumque amet temporibus ratione aspernatur
        impedit expedita dolores voluptatibus numquam, est at vero quod
        reiciendis saepe eveniet! Autem ex hic recusandae. Accusamus error
        dolore, sequi soluta quia impedit dignissimos reiciendis consectetur
        cupiditate?
      </div>
      <div className="d-flex m-auto mt-3 w-3/4 justify-start">
        <div className="procedure_coo">
          <div className="text-green-500">
            <h3>Following Are Steps You Have to Folow</h3>
          </div>
          <div>
            <ol type="1" className="capitalize" style={{ padding: "0" }}>
              <li>1. Click The Link</li>
              <li>2. register your self</li>
              <li>3. complete profile</li>
              <li>4. login</li>
              <li>5. upload download</li>
              <li>6. mail to us</li>
            </ol>
            <p className="text-primary " style={{ fontSize: "12px" }}>
              <a href="http://">click hear to fill form</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcedureCoo;
