// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
$('.dots li').click(function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
});


// Used for Hashnode integration; uses clientside (if JS is disabled won't show up)
async function fetchHashnodePosts() {
    const query = `
      query GetUserArticles {
        user(username: "akhanal47") {
          publication {
            posts(first: 2) {
              edges {
                node {
                  title
                  brief
                  dateAdded
                  slug
                }
              }
            }
          }
        }
      }
    `;
  
    try {
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      const posts = data.data.user.publication.posts.edges;
  
      const blogContainer = document.querySelector('#blog-posts-container');
      if (!blogContainer) return;
  
      blogContainer.innerHTML = posts.map(({ node }) => `
        <div class="blog-post">
          <h4>
            <a href="https://akhanal.hashnode.dev/${node.slug}" class="text-highlight" target="_blank">
              ${node.title}
            </a>
          </h4>
          <p class="blog-excerpt">${node.brief.substring(0, 150)}...</p>
          <p class="blog-date">Published on: ${new Date(node.dateAdded).toLocaleDateString()}</p>
        </div>
      `).join('');
  
    } catch (error) {
      console.error('Error fetching Hashnode posts:', error);
    }
  }
  
  // function call to get the latest feed
  document.addEventListener('DOMContentLoaded', fetchHashnodePosts);