async function photoApi() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=100",
    );

    if (!response.ok) {
      throw new error("server have some issue");
    }
    const photoes = await response.json();
    console.log(photoes);
    const gallery = document.querySelector(".container");

    photoes.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.download_url;
      img.width = 150;
      img.style.margin = "10px";
      gallery.appendChild(img);
    });
  } catch (err) {
    console.log("error", err);
  }
}

// document.addEventListener('DOMContentLoaded', function(){
//     photoApi()
// })

photoApi()