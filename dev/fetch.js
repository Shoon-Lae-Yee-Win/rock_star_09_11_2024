const api = "https://localhost:8080/posts/12";

// /** Fiirst Way */
// fetch(api).then(res=> res.json()).then(post => console.log(post)).catch(err => console.log(err));

// /** Second Way */
// async function fetchPost() {
//     const res = await fetch(api);
//     const post = await res.json();
//     console.log(post);
// }

// fetchPost();

/** Third Way */
fetch(api).then(async res=> {
    const post = await res.json();
    console.log(post);
});