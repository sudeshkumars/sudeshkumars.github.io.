  
  const myModal = document.getElementById('modal');

if (myModal) {
  myModal.addEventListener('shown.bs.modal', () => {
    console.log('Modal opened');
  });
}

  
  
  
  function scrollOffers(dir) {
    document.getElementById("offerTrack")
    .scrollBy({ left: dir * 300, behavior: "smooth" });

}
  

