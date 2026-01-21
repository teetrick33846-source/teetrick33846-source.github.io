$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(700, 200, 20, 540, "purple");
    createPlatform(1350,400, 50, 50, "lightpink");
    createPlatform(400, 100, 200, 10, "hotpink");
    createPlatform(200, 650, 100, 10, "hotpink");
    createPlatform(100, 550, 100, 10, "hotpink");
    createPlatform(300, 450, 100, 10, "hotpink");
    createPlatform(100, 400, 100, 10, "hotpink");
    createPlatform(200, 263, 100, 10, "hotpink");
    createPlatform(300, 150, 100, 10, "hotpink");
    createPlatform(700, 200, 100, 10, "hotpink");
    createPlatform(900,300, 100, 10, "hotpink");
    createPlatform(1100, 400, 100, 10, "hotpink");
    createPlatform(900, 650, 100, 10, "hotpink" );
    createPlatform(800, 550, 100, 10, "hotpink");
    createPlatform(720,450, 80, 10, "hotpink");
    createPlatform(800, 350, 20, 10, "hotpink");




    // TODO 3 - Create Collectables
    createCollectable("database", 1355, 358);
    createCollectable("database",750, 700);
    createCollectable("database", 500, 60);



    
    // TODO 4 - Create Cannons
    createCannon("left", 650, 1000);
    createCannon("right", 400, 2000);
    createCannon("top", 300, 3000);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
