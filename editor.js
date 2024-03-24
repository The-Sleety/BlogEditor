let activeElement = null;
let initialX, initialY, currentX, currentY;

document.querySelectorAll('.movable').forEach(item => {
  item.addEventListener('mousedown', startDrag);
});

function startDrag(e) {
  activeElement = e.target.parentElement;
  initialX = e.clientX - activeElement.offsetLeft;
  initialY = e.clientY - activeElement.offsetTop;
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
}

function doDrag(e) {
  if (activeElement) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    activeElement.style.left = currentX + 'px';
    activeElement.style.top = currentY + 'px';
  }
}

function stopDrag() {
  activeElement = null;
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
}
// Function to add a paragraph to the devlog content
function addParagraph() {
    var content = document.getElementById('devlogContent');
    content.innerHTML += '<p contenteditable="true">New Paragraph</p>';
  }
  
  // Function to add an iframe to the devlog content
function addIframe() {
    var url = prompt('Enter the URL of the iframe:');
    if (url) {
      var width = prompt('Enter the width of the iframe:');
      var height = prompt('Enter the height of the iframe:');
      var iframe = `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowfullscreen></iframe>`;
      document.getElementById('devlogContent').innerHTML += iframe;
    }
  }
  
  // Function to add an image to the devlog content
  function addImage() {
    var url = prompt('Enter the URL of the image:');
    if (url) {
      var width = prompt('Enter the width of the image:');
      var height = prompt('Enter the height of the image:');
      var image = `<img src="${url}" width="${width}" height="${height}" alt="Image">`;
      document.getElementById('devlogContent').innerHTML += image;
    }
  }
  
  // Function to add a video to the devlog content
  function addVideo() {
    var url = prompt('Enter the URL of the video:');
    if (url) {
      var width = prompt('Enter the width of the video:');
      var height = prompt('Enter the height of the video:');
      var video = `<video width="${width}" height="${height}" controls><source src="${url}" type="video/mp4">Your browser does not support the video tag.</video>`;
      document.getElementById('devlogContent').innerHTML += video;
    }
  }
  function addYouTubeVideo() {
    var url = prompt('Enter the URL of the YouTube video:');
    if (url) {
      // Extract video ID from URL
      var videoId = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];
      if (videoId) {
        // Set standard dimensions for YouTube video
        var width = 560;
        var height = 315;
        var video = `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById('devlogContent').innerHTML += video;
      } else {
        alert('Invalid YouTube video URL.');
      }
    }
  }

// Function to export the devlog content
function exportDevlog() {
    // Get the content within the <main> tag
    var mainContent = document.getElementById('main').innerHTML;
    
    // Remove the content menu and contenteditable attributes from the exported content
    mainContent = mainContent.replace(/<div class="content-menu">[\s\S]*?<\/div>/, '')
                             .replace(/ contenteditable="true"/g, '');
    
    // Open a new window with a textarea containing the exported code
    var exportWindow = window.open('', '_blank');
    var textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.fontSize = '16px'; // Adjust the font size as needed
    textarea.value = mainContent;
    exportWindow.document.body.appendChild(textarea);
  }
  
  
  