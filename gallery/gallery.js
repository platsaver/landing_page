function filterImages(category) {
    let images = document.querySelectorAll('.container1 img'); // Select all images

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "inline-block"; // Show matching images
        } else {
            img.style.display = "none"; // Hide non-matching images
        }
    });
}
