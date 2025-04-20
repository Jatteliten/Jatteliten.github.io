function openImageModal(imgElement) {
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
}