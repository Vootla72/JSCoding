async function myfetch(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
// async function myfetch(name) {
//   try {
//     let response = await fetch(name);
//     return await response.json();
//   } catch (err) {
//     console.error(err);
//     // Handle errors here
//   }
// }
export { myfetch };
