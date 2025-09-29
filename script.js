// Basic interactivity: language switcher and simple analytics placeholder
function onLangChange(path){
  if(!path) return;
  window.location.href = path;
}

// Placeholder to track affiliate click (user can replace with real analytics)
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href*="affiliate.example.com"]').forEach(function(a){
    a.addEventListener('click', function(){
      console.log('Affiliate link clicked');
      // TODO: push event to analytics
    })
  })
})
