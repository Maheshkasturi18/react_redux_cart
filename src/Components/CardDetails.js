import React from "react";

export default function CardDetails() {
  return (
    <div className="container">
      <h2 className="my-3 text-center">Items Details Page</h2>

      <section className="container border-black">
        <div className="itemsDetails d-flex ">
          <div className="px-3">
            <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{height:"300px"}}/>
          </div>

          <div className="">
                <p><b>Restuarant: </b> Massala Theoryy</p>
                <p><b>Price: </b>350</p>
                <p><b>Dishes: </b> North Indian, Biryani Muglai</p>
                <p><b>Total: </b> </p>
          </div>
        </div>
      </section>
    </div>
  );
}
