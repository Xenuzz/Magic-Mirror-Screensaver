Module.register("MMM-ScreenSaver", {
    defaults: {
      updateInterval: 30000, // Update interval in milliseconds
      images: [] // Array of image file paths
    },
  
    start: function() {
      this.scheduleUpdate(this.config.updateInterval);
      this.currentImageIndex = 0;
      this.loadImage();
    },
  
    getDom: function() {
      var wrapper = document.createElement("div");
      wrapper.className = "screensaver";
      wrapper.innerHTML = "<img id='screensaver-image' />";
      return wrapper;
    },
  
    loadImage: function() {
      var image = document.getElementById("screensaver-image");
      image.src = this.config.images[this.currentImageIndex];
      this.currentImageIndex = (this.currentImageIndex + 1) % this.config.images.length;
    },
  
    update: function() {
      this.loadImage();
    }
  });