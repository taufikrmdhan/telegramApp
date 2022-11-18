// import React from "react";
// import { Link } from "react-router-dom";

// const Index = () => {
//   const data = [
//     {
//       id: 1,
//       name: "Johan Annabele",
//       username: "johannaja",
//       email: "johan@gmail",
//     },
//   ];
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3 bg-danger py-4 px-5">
//             <div className="col-md-12 mt-5">
//               <div className="row ">
//                 <div className="col-md-3">
//                   <img
//                     src={require("../assets/image/profile.png")}
//                     alt=""
//                     width={55}
//                     height={55}
//                     className="rounded-circle"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <h6 className="ml-2">
//                     {data.map((item) => {
//                       return item.name;
//                     })}
//                   </h6>
//                   <p>
//                     <i className="fa fa-pencil text-muted"> Ubah profile</i>
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-12 mt-5">
//                 <small>
//                   <i className="fa fa-user rounded-circle bg-warning text-white p-2"></i>
//                   <span className="ms-2">My Account</span>
//                 </small>
//               </div>
//               <div className="col-md-12 mt-3">
//                 <small>
//                   <i className="fa fa-map-marker rounded-circle bg-warning text-white p-2"></i>
//                   <span className="ms-2">Shipping Address</span>
//                 </small>
//               </div>
//               <div className="col-md-12 mt-3">
//                 <small>
//                   <i className="fa fa-shopping-cart rounded-circle bg-warning text-white p-2"></i>
//                   <span className="ms-2">My Order</span>
//                 </small>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-8 bg-primary p-4 mx-3 border rounded" id="account">
//             <div className="col-md-12">
//               <h5>My Profile</h5>
//               <p className="text-muted">Manage your profile information</p>
//               <hr />
//             </div>
//             <div className="row">
//               <div className="col-md-7">
//                 <div className="row my-4">
//                   <div className="col-md-3">
//                     <label htmlFor="username" className="text-muted">
//                       Name
//                     </label>
//                   </div>
//                   <div className="col-md-8">
//                     <input
//                       type="text"
//                       name="username"
//                       id="username"
//                       className="form-control"
//                       placeholder="Masukkan nama"
//                     />
//                   </div>
//                 </div>
//                 <div className="row my-4">
//                   <div className="col-md-3">
//                     <label htmlFor="email" className="text-muted">
//                       Email
//                     </label>
//                   </div>
//                   <div className="col-md-8">
//                     <input
//                       type="text"
//                       name="email"
//                       id="email"
//                       className="form-control"
//                       placeholder="Masukkan email"
//                     />
//                   </div>
//                 </div>
//                 <div className="row my-4">
//                   <div className="col-md-3">
//                     <label htmlFor="phone" className="text-muted">
//                       Phone
//                     </label>
//                   </div>
//                   <div className="col-md-8">
//                     <input
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       className="form-control"
//                       placeholder="Masukkan nomor telepon"
//                     />
//                   </div>
//                 </div>

//                 <div className="row my-4">
//                   <div className="col-md-3">
//                     <label htmlFor="gender" className="text-muted">
//                       Gender
//                     </label>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="d-flex flex-row">
//                       <p className="mx-2">
//                         <input type="radio" name="jenis_kelamin" value="pria" />{" "}
//                         Pria
//                       </p>
//                       <p className="mx-2">
//                         <input
//                           type="radio"
//                           name="jenis_kelamin"
//                           value="perempuan"
//                         />{" "}
//                         Perempuan
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row my-4">
//                   <div className="col-md-3">
//                     <label htmlFor="date" className="text-muted">
//                       Date of Birth
//                     </label>
//                   </div>
//                   <div className="col-md-8">
//                     <input
//                       type="date"
//                       name="date"
//                       id="date"
//                       className="form-control"
//                     />
//                   </div>
//                 </div>
//                 <div className="row my-4">
//                   <div className="col-md-3"></div>
//                   <div className="col-md-8">
//                     <button type="btn" className="btn btn-danger rounded-pill">
//                       save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 bg-secondary">
//                 <div className="col-md-12 text-center border-start">
//                   <img
//                     src={require("../assets/image/profile.png")}
//                     alt=""
//                     width={120}
//                     height={120}
//                     className="rounded-circle"
//                   />
//                 </div>
//                 <div className="col-md-12 text-center mt-3">
//                   <button className="btn btn-outline-danger rounded-pill">
//                     Select image
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-8 bg-secondary p-4 mx-3 border rounded" id="address">
//             <div className="col-md-12">
//               <h5>Choose another address</h5>
//               <p className="">Manage your shipping address</p>
//               <hr />
//             </div>
//             <div className="col-md-12 customNewAdd">
//               <h5 className="text-center p-3">Add new address</h5>
//             </div>
//             <div className="col-md-12 customAdd">
//                 <div className="col-md-12 p-2">
//                     <h6>Johan Kost</h6>
//                 </div>
//                 <div className="col-md-12 p-2">
//                     <p className="text-primary">Perumahan manggis merdu, Jl. Kost Johan no. 1</p>
//                 </div>
//                 <div className="col-md-12 p-2">
//                     <h6 className="text-danger">Change address</h6>
//                 </div>
//             </div>
//           </div>
//           <div className="col-md-8 bg-secondary p-4 mx-3 border rounded" id="address">

//           </div>

//         </div>
//       </div>
//     </>
//   );
// };
// export default Index;
