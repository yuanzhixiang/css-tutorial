// Get all range inputs
const ranges = document.querySelectorAll('input[type="range"]');

// Function to update the clip-path position and display text
function updatePosition(input) {
  const id = input.id;
  const value = input.value;
  const isX = id.endsWith('-x');
  const type = id.startsWith('closest') ? 'closest' : 'farthest';
  
  // Update the position text in the h2
  const demoSection = input.closest('.demo-section');
  const positionSpan = demoSection.querySelector(`.position-${isX ? 'x' : 'y'}`);
  positionSpan.textContent = value;
  
  // Update the clip-path
  const demoBox = demoSection.querySelector('.demo-box');
  demoBox.style.setProperty(`--position-${isX ? 'x' : 'y'}`, `${value}%`);
}

// Add event listeners to all range inputs
ranges.forEach(range => {
  range.addEventListener('input', () => updatePosition(range));
}); 