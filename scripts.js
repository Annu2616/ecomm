// Get the modal elements
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");

// Get the buttons that open the modals
var loginBtn = document.getElementById("login-btn");
var signupBtn = document.getElementById("signup-btn");

// Get the <span> elements that close the modals
var closeLogin = document.getElementsByClassName("close")[0];
var closeSignup = document.getElementsByClassName("close")[1];

// Function to toggle login modal
function toggleLoginForm() {
    if (loginModal.style.display === "block") {
        loginModal.style.display = "none";
    } else {
        loginModal.style.display = "block";
    }
}

// Function to toggle signup modal
function toggleSignupForm() {
    if (signupModal.style.display === "block") {
        signupModal.style.display = "none";
    } else {
        signupModal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

// Close modals if clicked outside of them
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}
// Example JavaScript code (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Your script logic here (animations, interactivity, etc.)
});
// Example JavaScript code (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Your script logic here (animations, interactivity, etc.)
});
// Example JavaScript code (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Your script logic here (animations, interactivity, etc.)
});
document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart functionality (simple example)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemTitle = this.closest('.menu-item').querySelector('.menu-title').innerText;
            const itemPrice = this.closest('.menu-item').querySelector('.menu-price').innerText;
            const quantity = this.closest('.menu-item').querySelector('select').value;

            alert(`Added ${itemTitle} - ${quantity} to the cart. Price: ${itemPrice}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add any necessary JS logic for the offers
    const offerButtons = document.querySelectorAll('.cta-btn');
    offerButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for ordering! This offer has been added to your cart.');
        });
    });
});
// Get references to the review form and status message
const reviewForm = document.getElementById("review-form");
const submitReviewBtn = document.getElementById("submit-review");
const reviewStatus = document.getElementById("review-status");

// Add event listener to the submit button
submitReviewBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get values from the form inputs
    const name = document.getElementById("review-name").value;
    const rating = document.getElementById("review-rating").value;
    const reviewText = document.getElementById("review-text").value;

    // Basic validation
    if (name === "" || reviewText === "") {
        reviewStatus.innerHTML = "Please fill in all fields.";
        reviewStatus.className = "status-message failed";
        return;
    }

    // Simulate a successful review submission
    reviewStatus.innerHTML = "Thank you for your review!";
    reviewStatus.className = "status-message success";

    // Optionally, you can append the new review to the review list
    const reviewList = document.querySelector(".review-list");
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    
    newReview.innerHTML = `
        <div class="review-header">
            <img src="https://via.placeholder.com/50" alt="Customer Avatar" class="customer-avatar">
            <div class="reviewer-info">
                <h3>${name}</h3>
                <div class="rating">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
            </div>
        </div>
        <p class="review-text">${reviewText}</p>
    `;

    // Add the new review to the list
    reviewList.prepend(newReview);

    // Clear the form
    reviewForm.reset();
});
// You can add interactivity if needed, for example, changing followers count dynamically
document.addEventListener("DOMContentLoaded", function() {
    // Example of dynamically updating follower count (this could be pulled from a backend)
    const followersCount = document.querySelector('.followers-count');
    const initialCount = 25000;

    let count = initialCount;

    // Update follower count
    function updateFollowers() {
        if (count < initialCount + 100) {
            followersCount.innerHTML = `Followers: <strong>${count + 1}</strong>`;
            count++;
            setTimeout(updateFollowers, 50);
        }
    }

    updateFollowers();
});
// Get references to the form and button
const contactForm = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

// Handle form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        statusMessage.innerHTML = "Please fill in all the fields.";
        statusMessage.className = "status-message failed";
        return;
    }

    // Simulate sending the message
    setTimeout(() => {
        // Simulate success message
        statusMessage.innerHTML = "Thank you for reaching out! We'll get back to you soon.";
        statusMessage.className = "status-message success";

        // Reset the form
        contactForm.reset();
    }, 1000); // Simulate delay
});
