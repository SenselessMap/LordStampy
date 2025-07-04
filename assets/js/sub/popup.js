document.addEventListener("DOMContentLoaded", () => {
	const overlay = document.getElementById("imageOverlay");
	const overlayImg = document.getElementById("overlayImage");
	const thumb = document.querySelector(".catalogue_image");

	if (thumb) {
		thumb.addEventListener("click", () => {
		overlayImg.src = thumb.src;
		overlay.style.display = "flex";
		});

		overlay.addEventListener("click", () => {
		overlay.style.display = "none";
		});
	}
});

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeBannerBtn");
  const banner = document.getElementById("topBanner");
  
  if (closeBtn && banner) {
    closeBtn.addEventListener("click", () => {
      banner.style.display = "none";
    });
  }
});
