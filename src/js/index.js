const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () =>{
    modal.classList.add("aberto");
});


botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});
