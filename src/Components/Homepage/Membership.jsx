import React from "react";
// import { CheckIcon } from "@heroicons/react/outline";

import Forms from "../Utility/Form";

function Membership() {
  return (
    <>
      <article className="bg-white membership m-auto w-5/6 ">
        <section className=" px-4 sm:px-6 lg:px-8 lg:pt-20 bg-white">
          <section className="text-center">
            <h1 className="text-danger uppercase">MemberShip</h1>
          </section>
          <section className="overview ">
            <h3>
              <b> Overview</b>
            </h3>
            <p className="mt-3  mx-auto capitalize ">
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
            <div className="w-100 ">
              <section className="why_to_sub">
                <h3>
                  <b> Why To Subscribe SCCI Membership </b>
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
            <h3>
              {" "}
              <b>Please Fill This Form For More Info</b>
            </h3>
          </section>
        </section>
      </article>
      <section className="memb_form w-1/2 m-auto bg-gray-100">
        <Forms />
      </section>
    </>
  );
}

export default Membership;