function openPopup(imageSrc, title, certLink) {
    document.getElementById("cert-image").src = imageSrc;
    document.getElementById("cert-title").innerText = title;
    document.getElementById("cert-link").href = certLink;  // Correctly setting the link
    document.getElementById("cert-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("cert-popup").style.display = "none";
}
