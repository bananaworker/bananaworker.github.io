function activateGallery() {

  // Select all images under the gallery-thumbs id
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
  // bind to the main image
  let mainImage = document.querySelector("#gallery-photo > img");

// Set up an event listener for each selection from 'thumbnails'
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {

     // get the newImageSrc (from dataset)
     // and get the newImageAlt (from image attributes)
     let newImageSrc = thumbnail.dataset.largeVersion;
     // let newImageAlt = thumbnail.dataset.title;
     let newImageAlt = thumbnail.getAttribute("alt");

     mainImage.setAttribute("src", newImageSrc);
     mainImage.setAttribute("alt", newImageAlt)

     // Have the current class applied to current selection
     // and have it removed from the non-current selection
     let currentClass = "current"
     document.querySelector(".current").classList.remove(currentClass);
     thumbnail.parentNode.classList.add(currentClass);

     // Get the DOM elements for the image title and description
     // Then modify thier innerHTML to the selected thumbnails
     let galleryInfo = document.querySelector("#gallery-info")
     let title       = galleryInfo.querySelector(".title")
     let description  = galleryInfo.querySelector(".description")

     title.innerHTML      = thumbnail.dataset.title;
     description.innerHTML = thumbnail.dataset.description;

    });
  });
}
