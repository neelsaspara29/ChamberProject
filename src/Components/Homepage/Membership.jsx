import React from "react";
// import { CheckIcon } from "@heroicons/react/outline";

import Forms from "../Utility/Form";

function Membership() {
  return (
    <>
      <article className="bg-white membership m-auto w-5/6 pub ">
        <section className=" lg:pt-10 bg-white">
          <section className="text-center">
            <h1 className="text-danger title2"> About MemberShip</h1>
          </section>
          <section className="overview ">
            <h3 className="text-green-500 member_responsive text-center">
              <b> Overview</b>
            </h3>
            <p className="mt-3  mx-auto capitalize text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              aliquid alias facere deserunt commodi maiores voluptates error ex.
              Voluptate repellendus earum reprehenderit! Officia rem eos non
              tempora facere. Recusandae eum ratione pariatur explicabo culpa, a
              soluta deserunt doloribus distinctio, vel excepturi. Ullam
              aspernatur debitis totam alias minus autem commodi optio nulla,
              soluta ducimus ipsam quaerat praesentium reiciendis vitae
              blanditiis, dolorum odio nostrum id qui, maxime quisquam animi
              asperiores porro! At provident molestias repellat numquam deserunt
              voluptas vel veritatis explicabo quam, illo nostrum magni eveniet
              earum hic possimus accusamus, qui voluptatem. Exercitationem quam
              repudiandae iusto eius, explicabo magnam illum eum impedit.
            </p>
          </section>
          <section>
            <div className="w-100 text-center ">
              <section className="why_to_sub">
                <h3 className="text-green-500 member_responsive">
                  <b> Why To Subscribe ? </b>
                </h3>
              </section>
              <ul className="benefit list-none d-flex flex-col justify-start p-0">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  aut mollitia voluptatum inventore minus nostrum?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dolor voluptatem doloremque nemo voluptatum sed corporis ex
                  est tenetur impedit!
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt culpa ducimus aspernatur rem.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur illum culpa voluptatem repellat ratione obcaecati
                  vitae sunt? Nostrum.
                </li>
              </ul>
            </div>
            <div className="d-flex justify-center  ">
              {" "}
              <div className="btn btn-primary p-2  "> Download </div>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}

export default Membership;
