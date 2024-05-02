function toggleSidebar() {


  if(window.innerWidth <= 768)
  {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.left === "-100%") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-100%";
    }
  }
}

function remove() {

  if(window.innerWidth <= 768)
  {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.left === "-100%") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-100%";
    }
  }

}
document.getElementById("mrindia").addEventListener("click", remove);