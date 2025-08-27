let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");
let count = 0;

// Position each slide side by side
slide.forEach(function(slides, index) {
    slides.style.left = `${index * 100}%`;
});

function myFun() {
    slide.forEach(function(curVal) {
        curVal.style.transform = `translateX(-${count * 100}%)`;
    });
}

// Auto slide every 2 seconds
setInterval(function() {
    count++;
    if (count === slide.length) {
        count = 0;
    }
    myFun();
}, 2000);

// Card detail
card.forEach(function(cards) {
    cards.addEventListener("click", function() {
        console.log(cards.firstElementChild.src);

        // hide container
        document.querySelector(".container").style.display = "none";

        // create detail view
        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
            <img src="${cards.firstElementChild.src}" alt="">
            <div class="cardText">
                <h2>Top Trending Wear</h2>
                <h2>Upto 30% off Harry...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button>Buy Now</button>
                <button>Add To Cart</button>
                <a href="#" class="backBtn">Back</a>
            </div>
        `;

        document.querySelector("body").appendChild(div);

        // handle back button
        div.querySelector(".backBtn").addEventListener("click", function(e) {
            e.preventDefault();
            div.remove(); // remove detail view
            document.querySelector(".container").style.display = "block"; // show main container again
        });
    });
});
