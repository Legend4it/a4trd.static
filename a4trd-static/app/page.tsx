export default async function Home() {
  const res = await fetch("https://dummyjson.com/test");
  const data = await res.json();
  console.log("Fetched data:", data);
  
  return (
    <>
      <div className="container">
        <h1>🚧 Coming Soon</h1>

        <p>
          This site is currently under construction.<br />
          We’re working hard to launch something awesome!<br /><br />
          Contact us:{" "}
          <a href="mailto:info@a4trd.se">info@a4trd.se</a>
        </p>

        <div className="badge">Stay tuned</div>
      </div>

      <footer>
        © 2026 Your Name
      </footer>
    </>
  );
}