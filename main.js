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
// !WORK IN PROGRESS 
// ! NEED TO FIX

// async function fetchHashnodePosts() {
//     try {
//       console.log('Fetching posts from Hashnode...');
//       const response = await fetch('https://api.hashnode.dev/graphql', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           query: `
//             query GetPosts {
//               publication(host: "akhanal.hashnode.dev") {
//                 posts(first: 2) {
//                   edges {
//                     node {
//                       title
//                       brief
//                       publishedAt
//                       slug
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           `
//         })
//       });
  
//       const data = await response.json();
//       console.log('API Response:', data);
  
//       const posts = data.data?.publication?.posts?.edges;
//       const blogContainer = document.querySelector('#blog-posts-container');
      
//       if (!blogContainer) {
//         console.error('Blog container not found in DOM');
//         return;
//       }
  
//       if (!posts || posts.length === 0) {
//         blogContainer.innerHTML = '<p class="blog-excerpt">No posts found.</p>';
//         return;
//       }
  
//       blogContainer.innerHTML = posts.map(({ node }) => `
//         <div class="blog-post">
//           <h4>
//             <a href="https://akhanal.hashnode.dev/${node.slug}" class="text-highlight" target="_blank">
//               ${node.title}
//             </a>
//           </h4>
//           <p class="blog-excerpt">${node.brief ? node.brief.substring(0, 150) + '...' : ''}</p>
//           <p class="blog-date">Published on: ${new Date(node.publishedAt).toLocaleDateString()}</p>
//         </div>
//       `).join('');
  
//     } catch (error) {
//       console.error('Error details:', error);
//       const blogContainer = document.querySelector('#blog-posts-container');
//       if (blogContainer) {
//         blogContainer.innerHTML = '<p class="blog-excerpt">Error loading posts. Please try again later.</p>';
//       }
//     }
//   }
  
//   // Wait for DOM to load then fetch posts
//   document.addEventListener('DOMContentLoaded', fetchHashnodePosts);
  
//   // Also expose the function globally for debugging
//   window.fetchHashnodePosts = fetchHashnodePosts;