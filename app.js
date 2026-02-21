const IS_GITHUB_PAGES = location.hostname.includes("github.io");

document.addEventListener("DOMContentLoaded", () => {
  if (IS_GITHUB_PAGES) {
    startDemoMode();
  } else {
    console.log("Local mode");
  }
});

function startDemoMode() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="card">
      <h2>Welcome! Demo User</h2>
      <p>You are viewing demo mode.</p>
    </section>

    <section class="card">
      <h3>📊 Quick Stats</h3>
      <div class="stats">
        <div>Unread emails: 1</div>
        <div>Next event: Today</div>
        <div>Recent files (48h): 3</div>
        <div>Last updated: ${new Date().toLocaleString()}</div>
      </div>
    </section>
  `;
}