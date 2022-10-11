import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";

function Jobportal() {
  return (
    <>
      <Header1 />
      <div className="w-2/3 m-auto mt-4 pub">
        <div>
          <h2 className="text-center title2 text-danger uppercase">
            Job portal
          </h2>
        </div>
        <div className="mt-5" style={{ fontSize: "16px" }}>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sunt sit magni dicta quos consectetur ab nulla nemo eligendi,
            doloribus quasi, eaque tempore nihil quisquam laudantium beatae
            officia quod asperiores perferendis iusto delectus mollitia!
            Voluptatem consequuntur excepturi cum esse. Placeat tenetur quae
            quibusdam sit labore ad obcaecati ab perspiciatis reiciendis,
            sapiente sunt temporibus amet beatae enim earum molestias inventore
            eius cumque possimus laborum a! Repudiandae officiis eligendi
            facilis consectetur modi perferendis laborum necessitatibus aliquam
            hic, fugit consequuntur, dolorem deleniti. Repellendus ab alias
            labore nostrum recusandae distinctio neque veritatis corrupti
            facilis dolore, provident cumque excepturi ex omnis et suscipit unde
            veniam?
          </p>
          <p className="text-blue-400 hover:text-blue-900">
            <small>
              {" "}
              <Link to="/">Explore Job In Our Job Portal</Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Jobportal;
