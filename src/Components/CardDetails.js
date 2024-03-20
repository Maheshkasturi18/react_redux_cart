import React from "react";

export default function CardDetails() {
  return (
    <div className="container">
      <h2 className="mt-3 mb-5 text-center">Items Details Page</h2>

      <section className="container border-black">
        <div className="itemsDetails d-flex ">
          <div className="px-4">
            <img
              src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
              style={{ height: "300px" }}
            />
          </div>

          <div className="d-flex">
            <div className="px-3">
              <p>
                <b>Restuarant: </b> Massala Theoryy
              </p>
              <p>
                <b>Price: </b>350
              </p>
              <p>
                <b>Dishes: </b> North Indian, Biryani Muglai
              </p>
              <p>
                <b>Total: </b>
                350
              </p>
            </div>

            <div>
              <p>
                <b>Rating: </b>
               <span style={{backgroundColor:"green",color:"white",padding:"3px",borderRadius:"5px"}}> 3.5 ★</span>
              </p>
              <p>
                <b>Order Review: </b>
                1175+ order placed from here recently 
              </p>
              <p>
                <b>Remove:</b>
                <i className="fa-solid fa-trash" style={{color:"red",padding:"5px"}}></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
