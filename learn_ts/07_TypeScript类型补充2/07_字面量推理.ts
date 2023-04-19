type Method = "GET" | "POST";
function request(url: string, method: Method) {}
// type Request = {
//   url: string;
//   method: Method;
// };
// const options: Request = {
//   url: "https:www.baidu.com",
//   method: "GET",
// };
const options = {
  url: "https:www.baidu.com",
  method: "123",
};
request(options.url, options.method as Method); //options.method as Method

export {};
