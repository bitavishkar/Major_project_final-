import React from "react";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        {/* <p>Deblurring One At A time </p>
        <h2>Bringing Clearity to life </h2>
         */}
        <div
          style={{
            border: "2px solid blue",
            hover: {
              backgroundColor: "yellow",
            },
          }}
          className="d-flex justify-content-center view overlay"
        >
          <img
            className="mask flex-center rgba-red-strong"
            style={{
              //   margin: "50px",
              marginRight: "200px",
              marginLeft: "50px",
              border: "1px solid black",
              filter: "blur(5px)",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92FTqXBszNbvkuKazjHSmBwi9veebslc9lkSayW2fhw&s"
            // className="rounded float-left"
            alt="..."
          />
          <img
            // className="ml-lg-5 ml-lg-5"
            style={{
              //   margin: "50px",
              marginRight: "50px",
              marginLeft: "200px",
              border: "1px solid black",
              filter: "blur(5px)",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92FTqXBszNbvkuKazjHSmBwi9veebslc9lkSayW2fhw&s"
            alt="..."
          />
        </div>
      </section>
    </>
  );
};

export default Home;



// <Navbar />
//       <div className="container" style={{ border: "2px solid green" }}>
//         <div className="row">
//           <div
//             className="card col"
//             style={{ height: "30px", border: "2px solid blue" }}
//           >
//             <div>
//               <img
//                 className="card-img-top object-fit-cover"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92FTqXBszNbvkuKazjHSmBwi9veebslc9lkSayW2fhw&s"
//                 alt="Card image cap"
//               />
//               <div className="card-body">
//                 <button type="button" class="btn btn-primary">
//                   Primary
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div
//             className="card col"
//             style={{ width: "18rem", border: "2px solid blue" }}
//           >
//             <img
//               className="card-img-top object-fit-cover"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92FTqXBszNbvkuKazjHSmBwi9veebslc9lkSayW2fhw&s"
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <button type="button" class="btn btn-primary">
//                 Primary
//               </button>
//             </div>
//           </div>

//           <div
//             className="card col"
//             style={{ width: "18rem", border: "2px solid blue" }}
//           >
//             <img
//               className="card-img-top object-fit-cover"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92FTqXBszNbvkuKazjHSmBwi9veebslc9lkSayW2fhw&s"
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <button type="button" class="btn btn-primary">
//                 Primary
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>