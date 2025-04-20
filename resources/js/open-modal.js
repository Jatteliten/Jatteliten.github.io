function openImageModal(imgElement) {
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalLabel');

    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;

    modalTitle.textContent = imgElement.alt || "Image";
}