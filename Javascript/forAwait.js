async function fetchMultipleAPIs() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  const fetchPromises = urls.map((url) => fetch(url).then((res) => res.json()));

  for await (const data of fetchPromises) {
    console.log(data.title); // Logs post titles
  }
}

const apicall1 = async() => {
  const res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json()
};
const apicall2 = async() => {
  const res=await fetch("https://jsonplaceholder.typicode.com/post/2");
  return res.json()
};
const apicall3 = async() => {
  const res=await fetch("https://jsonplaceholder.typicode.com/posts/3");
  return res.json()
};

const results = await Promise.all([apicall1(),apicall2(),apicall3()]);




results.forEach((res)=>{
    console.log(res.title);
    
})

// fetchMultipleAPIs();
