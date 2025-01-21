// // Example of simple interactivity - Toggle menu for mobile view
// document.addEventListener("DOMContentLoaded", function() {
//     const menu = document.querySelector("nav ul");
//     const toggleMenu = document.createElement('button');
//     toggleMenu.innerHTML = '☰';
//     toggleMenu.classList.add('menu-toggle');
//     document.querySelector("header").appendChild(toggleMenu);

//     toggleMenu.addEventListener('click', () => {
//         menu.classList.toggle('active');
//     });
// });

//javaScript for LoginButton

document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const loginModal = document.getElementById("login-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const loginForm = document.getElementById("login-form");

    const signupModal = document.getElementById("signup-modal");
    const signupForm = document.getElementById("signup-form");
    const closesignupModalBtn = document.getElementById("close-signup-modal");

    const forgotpasswordmodal = document.getElementById("forgot-password-modal");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const closeforgotpasswordModalBtn = document.getElementById("close-forgot-password-modal");

    const quizBtn = document.getElementById("quiz-btn");
    const quizModal = document.getElementById("quiz-modal");
    const closequizModalBtn = document.getElementById("close-quiz-modal");
    const wellnessquiz= document.getElementById("wellness-quiz-form");

    // Open Login Modal
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "flex";
    });

    // Close Modal
    closeModalBtn.addEventListener("click", function() {
        loginModal.style.display = "none";
    });

    closesignupModalBtn.addEventListener("click", function() {
        signupModal.style.display = "none";
    });
    closeforgotpasswordModalBtn.addEventListener("click", function() {
        forgotpasswordmodal.style.display = "none";
    });
// Open quiz Modal
    quizBtn.addEventListener("click", function() {
        quizModal.style.display = "flex";
    });
    // Close quiz Modal
    closequizModalBtn.addEventListener("click", function() {
        quizModal.style.display = "none";
    });

    // Switch to Signup Section
    document.querySelector("a[href='/signup']").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("login-modal").style.display = "none";
        document.getElementById("signup-modal").style.display = "block";
    });

    // Switch to Forgot Password Section
    document.querySelector("a[href='/forgot-password']").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("login-modal").style.display = "none";
        document.getElementById("forgot-password-modal").style.display = "block";
    });

    // Handle Form Submission (with basic validation)
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("rememberMe").checked;

        if (!username || !password) {
            alert("Please fill in both fields!");
            return;
        }

        const loginData = {
            username,
            password,
            rememberMe
        };

        // Send login data to the server (use Fetch API or AJAX to communicate with the backend)
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login successful!");
                // Redirect or show user dashboard here
                loginModal.style.display = "none"; // Close modal on success
            } else {
                alert("Invalid credentials!");
            }
        })
        .catch(error => console.error('Error:', error));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("wellness-quiz");

    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const goal = document.getElementById("goal").value;
        const diet = document.getElementById("diet").value;
        const activity = document.getElementById("activity").value;
        const wearables = document.getElementById("wearables").value;

        // Display a personalized wellness report based on user input
        let wellnessReport = `Your Wellness Report:\nGoal: ${goal}\nDiet: ${diet}\nActivity Level: ${activity}\nSync Wearables: ${wearables}`;

        // Display the report in a new section (or on a modal)
        alert(wellnessReport);
    });
});