import React from "react";
import Header1 from "../../Components/Header/Header1";

function ProcedureCoo() {
  return (
    <>
      <Header1 />
      <div className="text-danger text-center my-4 uppercase">
        <h2 className="title2">Procedure</h2>
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
      <table className="w-3/4 mt-3 mx-auto ">
        {/* <caption>Statement Summary</caption> */}
        <thead>
          <tr>
            <th scope="col">PDF1</th>
            <th scope="col">PDF2</th>
            <th scope="col">PDF3</th>
            <th scope="col">PDF4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="PFD1">
              <div className="btn btn-primary px-2 py-1  inline pub_text">
                Download
              </div>
            </td>
            <td data-label="PDF2">
              <div className="btn btn-primary px-2 py-1  inline pub_text">
                Download
              </div>
            </td>
            <td data-label="PDF3">
              <div className="btn btn-primary px-2 py-1  inline pub_text">
                Download
              </div>
            </td>
            <td data-label="PDF4">
              <div className="btn btn-primary px-2 py-1  inline pub_text">
                Download
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex mx-auto mt-10 w-3/4 justify-start">
        <div className="procedure_coo">
          <div className="text-green-500">
            <h3 className="title2 text-primary">
              Following Are Steps You Have to Follow
            </h3>
          </div>

          <div>
            <ol type="1" className="capitalize" style={{ padding: "0" }}>
              <li>1. Download PDF</li>
              <li>2. Fill Form</li>
              <li>3. Send Us</li>
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
