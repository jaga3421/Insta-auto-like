
function autoLike(){
  let likeButton = document.getElementsByClassName('coreSpriteHeartOpen')[0],
      next = document.getElementsByClassName('coreSpriteRightPaginationArrow')[0];
  likeButton.firstElementChild.getAttribute('aria-label') === "Like" && 
  Number(likeButton.offsetParent.nextSibling.innerText.split(' ')[0]) <= 40 &&
    likeButton.click();
  setTimeout(()=>{
    next.click();
  },2000)
}

const INIT_AUTO_LIKE = delay => setInterval(autoLike,delay);

INIT_AUTO_LIKE(8000)
