<script>
  const swipeContainer = document.querySelector('.swipe-images');
  let startX;
  let currentX;
  let isSwiping = false;

  swipeContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the starting X position
    isSwiping = true;
  });

  swipeContainer.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;

    currentX = e.touches[0].clientX;
    const diffX = startX - currentX; // Calculate the distance moved

    // Move the swipe container by the difference in X position
    swipeContainer.style.transform = `translateX(${diffX}px)`;
  });

  swipeContainer.addEventListener('touchend', () => {
    isSwiping = false;

    // Reset the transform to the starting position
    swipeContainer.style.transition = 'transform 0.3s ease'; // Smooth transition after swipe
    swipeContainer.style.transform = 'translateX(0)';
  });
</script>
