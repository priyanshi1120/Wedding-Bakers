// document.getElementById('next').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }
  // Function to handle the automatic transition
// Function to handle the automatic transition
// Function to handle the automatic transition
function autoTransition() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

// Function to start the automatic transition with a random delay between 5 to 10 seconds
function startAutoTransition() {
    autoTransition(); // Perform the initial transition
    const randomDelay =  10000 ; // Generate a random delay between 5 to 10 seconds (in milliseconds)
    setTimeout(startAutoTransition, randomDelay); // Schedule the next transition with a random delay
}

// Start the automatic transition initially
startAutoTransition();
