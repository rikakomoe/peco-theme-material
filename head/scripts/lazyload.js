// Offer LazyLoad
queue.offer(function(){
  $('.lazy').lazyload({
    effect : 'show'
  });
});

// Start Queue
$(document).ready(function(){
  setInterval(function(){
    queue.execNext();
  },200);
});