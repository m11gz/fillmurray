<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My page</title>
    <style>
      body {
        background: red;
      }
    </style>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animals are cool!</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <script src="app.js"></script>
    <header>
      <h1>animals page</h1>
      <nav>
        <ul>
          <li><a href="#">Feline</a></li>
          <li><a href="#">Feline</a></li>
          <li><a href="#">Ursus</a></li>
        </ul>
        <script>
          let yourname = prompt("Teacher or Student?");

          if (yourname === "Teacher") {
            console.log("Please give me an A+!!");
            document.write("Please give me an A!");
          } else {
            console.log("Nice dude!");
          }
        </script>

        <script>
          let username = prompt("Who goes there?");
          document.write("Nice to meet you," + username);
        </script>
      </nav>
    </header>
    <main>
      <section>
        <h2>Cool Types of Furry Creatures</h2>
        <ul>
          <li>kitten</li>
          <li>bobcat</li>
          <li>bear</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <img
              src="https://placekitten.com/640/360
            "
            />
            <p>Cat</p>
          </li>
          <li>
            <img
              src="https://loremflickr.com/640/360
            "
            />
            <p>Bobcat</p>
          </li>
          <li>
            <img
              src="https://placebear.com/640/360
            "
            />
            <p>Bear</p>
          </li>
        </ul>
        <script>
          let answer = prompt("Cats or Dogs?");
          document.write("Well that's nice Mr," + answer);
        </script>
      </section>
    </main>
    <footer>
      <p>&copy;Class 102w29</p>
    </footer>
  </body>
</html>
