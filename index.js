document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const factBox = document.getElementById("fact-box");
    const inputField = document.querySelector("input")

    button.addEventListener("click", async () => {
        const topic = inputField.value.trim();
        if (!topic) {
            factBox.innerHTML="Please enter a topic";
            return;
        }


        try {
            //Get random fact from wikipedia API
            const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`);
            const data = await response.json();

            //Fact displayed using typewriter
        if (data.extract) {
            factBox.innerHTML = ""; //clear previous text
            const typewriter = new Typewriter(factBox, {
                loop: false,
                delay: 40,
            });

            typewriter
                .typeString(data.extract)  
                .start();
        } else {
            factBox.innerHTML = "No fact found on this topic. Please try again."
            }
        }   catch (error) {
            factBox.innerHTML = "Oops! Something went wrong.  Please try again.";
            console.error("Error fetching fact:", error);
         }
    });
});