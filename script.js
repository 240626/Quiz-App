let q = [
    {
        q: "What does HTML stand for?",
        a: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        c: 0
    },
    {
        q: "What does CSS do?",
        a: ["Structure page", "Style page", "Run server"],
        c: 1
    },
    {
        q: "Which tag is used for a link?",
        a: ["<img>", "<a>", "<p>"],
        c: 1
    },
    {
        q: "Which tag creates a button?",
        a: ["<button>", "<div>", "<span>"],
        c: 0
    }
];

let i = 0;
let score = 0;

load();

function load(){

    if(i >= q.length){
        document.getElementById("box").style.display = "none";
        document.getElementById("result").innerText =
            "Score: " + score + " / " + q.length;
        return;
    }

    document.getElementById("question").innerText = q[i].q;

    let ans = document.getElementById("answers");
    ans.innerHTML = "";

    q[i].a.forEach((text, index) => {

        let div = document.createElement("div");
        div.className = "option";
        div.textContent = text;

        div.onclick = function(){
            check(index);
        };

        ans.appendChild(div);
    });
}

function check(x){

    if(x == q[i].c){
        score++;
    }

    i++;
    load();
}

function next(){
    i++;
    load();
}