document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const factBox = document.getElementById("fact-box");

    button.addEventListener("click", async () => {
        try {
            //Get random fact ftom API
            const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
            const data = await response.json();

            //Fact displayed using typewriter
            factBox.innerHTML = ""; //clear previous text
            const typewriter = new typewriter(factBox, {
                loop: false,
                delay: 40,
            });

            typewriter
                .typestring(data.text)  //API returns fact as words
                .start();
        }   catch (error) {
            factBox.innerHTML = "Oops! Something went wrong.  Please try again.";
            console.error("Error fetching fact:", error);
     }
}); 