
  // Function to change the image source for mobile view
  function changeImageForMobile(imageId, mobileSource, defaultSource) {
    var imageElement = document.getElementById(imageId);

    // Check if the screen width is less than or equal to a certain value (e.g., 600px for mobile)
    if (window.innerWidth <= 500) {
      imageElement.src = mobileSource;
    } else {
      imageElement.src = defaultSource;
    }
  }

  // Call the function for each image
  changeImageForMobile('image1', './photos/mobile/mb-tech.jpg',   './photos/Technical.png');
  changeImageForMobile('image2', './photos/mobile/mb-tech.jpg',   './photos/Technical.png');
  changeImageForMobile('image3', './photos/mobile/mb-nontech.jpg','./photos/Non-technical.png');
  changeImageForMobile('image4', './photos/mobile/mb-flagship.jpg','./photos/flagship.png');
