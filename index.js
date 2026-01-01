const express = require("express");
const app = express();

app.use(express.static("public"));

/* ================= PAGE 1 : INTRO ================= */
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Happy New Year 2026 🎉</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{margin:0;overflow:hidden;font-family:Arial;}
video{width:100vw;height:100vh;object-fit:cover;}
.overlay{
  position:absolute;top:0;left:0;width:100%;height:100%;
  display:flex;flex-direction:column;justify-content:center;align-items:center;
  color:white;text-shadow:0 0 20px black;
}
h1{font-size:3rem;animation:pulse 1.5s infinite;}
@keyframes pulse{50%{transform:scale(1.1);}}
.tap{
  margin-top:20px;
  background:rgba(0,0,0,0.6);
  padding:12px 25px;
  border-radius:25px;
}
</style>
</head>
<body>

<video autoplay muted loop playsinline>
  <source src="/newyear.mp4" type="video/mp4">
</video>

<div class="overlay">
  <h1>🎊 HAPPY NEW YEAR 2026 🎊</h1>
  <div class="tap">👉 Tap once to start music 🎵</div>
</div>

<audio id="music" muted>
  <source src="/music.mp3" type="audio/mpeg">
</audio>

<script>
  const music = document.getElementById("music");

  // REQUIRED user interaction
  document.body.addEventListener("click", () => {
    music.muted = false;
    music.volume = 0.7;
    music.play();
    localStorage.setItem("musicStarted","yes");
  }, { once:true });

  setTimeout(() => {
    window.location.href = "/shayari";
  }, 7000);
</script>

</body>
</html>
`);
});

/* ================= PAGE 2 : SHAYARI ================= */
app.get("/shayari", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Start youe New Year with some shyari ✨</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{margin:0;overflow:hidden;font-family:Georgia;}
video{width:100vw;height:100vh;object-fit:cover;}
.box{
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
  background:rgba(0,0,0,0.55);
  color:white;padding:30px;border-radius:20px;
  text-align:center;
}
</style>
</head>
<body>

<video autoplay muted loop playsinline>
  <source src="/funny2.mp4" type="video/mp4">
</video>

<div class="box">
<h2>✨ **********✨</h2>
<p>
Purani yaadon ko muskura ke bhool jao 😊<br>
Naye sapno ke saath aage badh jao 🚀
</p>
<p>
Gir kar uthna hi jeet ki pehchaan hai 💪<br>
2026 likhne wala hai naya itihaas 🔥
</p>
</div>

<audio id="music">
  <source src="/music.mp3" type="audio/mpeg">
</audio>

<script>
  const music = document.getElementById("music");
  if(localStorage.getItem("musicStarted")==="yes"){
    music.volume = 0.7;
    music.play();
  }
  setTimeout(()=>location.href="/funny",7000);
</script>

</body>
</html>
`);
});

/* ================= PAGE 3 : FUNNY ================= */
app.get("/funny", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title> *********</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{margin:0;overflow:hidden;font-family:Arial;}
video{width:100vw;height:100vh;object-fit:cover;}
.text{
  position:absolute;bottom:20%;
  width:100%;text-align:center;
  color:white;font-size:1.6rem;
  text-shadow:0 0 15px black;
}
</style>
</head>
<body>

<video autoplay muted loop playsinline>
  <source src="/funny1.mp4" type="video/mp4">
</video>

<div class="text">
😂 Resolution: Gym join karunga 💪<br>
🤡 Reality: Kal se pakka
</div>

<audio id="music">
  <source src="/music.mp3" type="audio/mpeg">
</audio>

<script>
  const music=document.getElementById("music");
  if(localStorage.getItem("musicStarted")==="yes"){
    music.volume=0.7;
    music.play();
  }
  setTimeout(()=>location.href="/end",7000);
</script>

</body>
</html>
`);
});

/* ================= PAGE 4 : END ================= */
app.get("/end", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>The End ❤️</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{margin:0;overflow:hidden;font-family:sans-serif;}
video{width:100vw;height:100vh;object-fit:cover;}
.card{
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
  background:rgba(255,255,255,0.9);
  padding:30px;border-radius:20px;text-align:center;
}
</style>
</head>
<body>

<video autoplay muted loop playsinline>
  <source src="/funny2.mp4" type="video/mp4">
</video>

<div class="card">
<h1>❤️ Thank You ❤️</h1>
<p>May 2026 bring Happiness 😊 Health 💪 Success 🚀</p>
<b>Aditya Kumar – CSBS 😊</b>
</div>

<audio id="music">
  <source src="/music.mp3" type="audio/mpeg">
</audio>

<script>
  const music=document.getElementById("music");
  if(localStorage.getItem("musicStarted")==="yes"){
    music.volume=0.7;
    music.play();
  }
</script>

</body>
</html>
`);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log("🎬 New Year Website Running")
);
