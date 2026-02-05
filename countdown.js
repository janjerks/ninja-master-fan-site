<!-- In guild-wars.html -->
<h2>Next Guild War Countdown</h2>
<div id="countdown"></div>

<script>
  // Set this to the next known start date/time (UTC or local; adjust as needed)
  const nextWar = new Date("2026-03-01T00:00:00"); // Example: March 1, 2026 midnight local time

  function updateCountdown() {
    const now = new Date();
    const diff = nextWar - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "Guild War may be ongoing or ended! Check in-game.";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
</script>
