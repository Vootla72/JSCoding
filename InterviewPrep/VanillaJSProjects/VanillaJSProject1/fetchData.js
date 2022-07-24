async function fetchAPIData(param) {
  //   const res = await fetch('https://randomuser.me/api?results=50');
  const res = await fetch(
    `https://flipkart-email-mock.vercel.app/?id=${param}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export { fetchAPIData };
// //   const res = await fetch('https://randomuser.me/api?results=50');
// const res1 = fetch('https://flipkart-email-mock.vercel.app/?id=3')
//   .then((res) => res.json())
//   .then((json) => console.log(json));
// // const data = await res.json();
// export { res1 };
