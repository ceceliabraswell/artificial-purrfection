document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".card img");

    images.forEach((img, index) => {
        // create image modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute("id", `modal-${index}`);

        modal.innerHTML = `
            <div class="image-modals">
                <span class="close" onclick="closeModal('modal-${index}')"><i class='bx bx-x'></i></span>
                <img src="${img.src}" alt="${img.alt}">
                <h2>${img.previousElementSibling.innerText}</h2>
            </div>
        `

        document.body.appendChild(modal);

        // add click event to open modal
        img.addEventListener("click", function() {
            document.getElementById(`modal-${index}`).style.display = "block";
        })
    })

    window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    }

});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}