// show the pop

let rule = document.querySelector(".rule ");
let pop = document.querySelector(".rule-pop");
let closePop = document.querySelector(".rule-pop .close img");

let popHide = () => {
  rule.onclick = function () {
    pop.classList.toggle("hide");
  };
  closePop.onclick = function () {
    pop.classList.add("hide");
  };
};

popHide();

// the rules

let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let all = document.querySelectorAll(".types > div > div");
let img = document.querySelector(".types  > img");
let select = document.querySelector(".select");
let user = document.querySelector(".select .user");
let random = document.querySelector(".select .random");
let type =document.querySelector(".types") 
let names = ["rock", "paper", "scissors"];

let play = () => {
  all.forEach((el) => {
    el.addEventListener("click", function () {
      let ranNumber = Math.floor(Math.random() * names.length);
      // all.forEach((el) => el.classList.add("hide"));
      // el.classList.remove("hide");
      // img.classList.add("hide");
      type.style.display = "none"
      select.classList.remove("hide");
      user.appendChild(el);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = `images/icon-${names[ranNumber]}.svg`;
      div.appendChild(image);
      div.classList.add("photo");
      div.classList.add(names[ranNumber]);
      random.appendChild(div);
      checked();
    });
  });
};

let refres = () => {
  type.style.display = "block"

  select.classList.add("hide");
  random.children[0].remove();
  let main = document.querySelector(".types > div");
  main.appendChild(user.children[0]);
};
let num = 0;
let score = document.querySelector(".screen .points .score");

let checked = () => {
  let ranChild = document.querySelector(`.select .random > div`);
  let userChild = document.querySelector(`.select .user > div`);
  let result = document.querySelector(
    ".select .combined .result span:first-child"
  );
  let userChose = userChild.className.trim().split(" ")[1];
  let ranChose = ranChild.className.trim().split(" ")[1];
  if (userChose === ranChose) {
    result.innerHTML = "It's a tie!";
  } else if (userChose === "scissors" && ranChose === "rock") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "rock" && ranChose === "scissors") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "paper" && ranChose === "scissors") {
    result.innerHTML = "You lose";
    num--;
  } else if (userChose === "scissors" && ranChose === "paper") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "rock" && ranChose === "paper") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "paper" && ranChose === "rock") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "spock" && ranChose === "lizard") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "lizard" && ranChose === "spock") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "spock" && ranChose === "scissors") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "scissors" && ranChose === "spock") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "scissors" && ranChose === "lizard") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "lizard" && ranChose === "scissors") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "paper" && ranChose === "spock") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "spock" && ranChose === "paper") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "lizard" && ranChose === "paper") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "paper" && ranChose === "lizard") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "rock" && ranChose === "lizard") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "lizard" && ranChose === "rock") {
    result.innerHTML = "You Lose";
    num--;
  } else if (userChose === "spock" && ranChose === "rock") {
    result.innerHTML = "You Win";
    num++;
  } else if (userChose === "rock" && ranChose === "spock") {
    result.innerHTML = "You lose";
    num--;
  }
  if (num <= 0) {
    num = 0;
  }
  score.innerHTML = num;
};
// let names_2 = ["rock", "paper", "scissors", "lizard", "spock"];
play();
let again = document.querySelector(".select .combined .again");

again.onclick = function () {
  refres();
};
