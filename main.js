
    setInterval(function() {
      
    let dest = new Date("May 21, 2026 19:55:00").getTime();

      
      
      let d1 = new Date().getTime();


      let diff = dest - d1;


      let days = Math.floor(diff/ (1000
        *60 *60 *24));

      let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("day").innerHTML = `${days}`;

      document.getElementById("hour").innerHTML = `${hrs}`;

      document.getElementById("mins").innerHTML = `${minutes}`;

      document.getElementById("sec").innerHTML = `${seconds}`;

      console.log(days);
    }, 1000);





window.onload=function() {
  

      //alert("ready");
      let wish_arr = ["Each year I spend with you is the best one yet! Here’s to making more memories in 2021.", "Here’s to another year full of joy, laughter, and unforgettable memories with an unforgettable friend!", "A new year is like starting a new chapter in your life. It’s your chance to write an incredible story for yourself.", "I can’t wait to see where the next year brings us! Wishing you nothing but happiness in the new year."];


      let i = Math.floor(Math.random()*wish_arr.length);


      let wishes = document.getElementById('wishes');

      wishes.innerText = wish_arr[i];
      

    };


