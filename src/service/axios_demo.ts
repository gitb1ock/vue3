// import axios from "axios";
//
// axios.defaults.baseURL = "http://httpbin.org";
//
// axios.interceptors.request.use(
//   (value) => {
//     console.log(value);
//     return value;
//   },
//   (error) => {
//     console.log(error);
//   },
// );
//
// axios.interceptors.response.use(
//   (value) => {
//     console.log(value);
//     return value;
//   },
//   (error) => {
//     console.log(error);
//   },
// );

// axios
//   .get("/get", {
//     params: {
//       name: "lkc",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios
//   .post("/post", {
//     data: {
//       name: "lkc",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios
//   .all([
//     axios.get("/get", { params: { name: "why", age: 18 } }),
//     axios.post("/post", { data: { name: "fire", age: 21 } }),
//   ])
//   .then((res) => {
//     console.log(res);
//   });
// import myAxiosRequest from "./index";
// myAxiosRequest.instance
//   .get("/get", {
//     params: {
//       name: "lkc",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });
// myAxiosRequest2.instance
//   .get("/get", {
//     params: {
//       name: "lkc",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });
