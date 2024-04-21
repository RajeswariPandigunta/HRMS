document.addEventListener('DOMContentLoaded', function() {
    const jobPostingForm = document.getElementById('jobPostingForm');
    
    jobPostingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const jobTitle = document.getElementById('jobTitle').value;
        const requirements = document.getElementById('requirements').value;
        const qualifications = document.getElementById('qualifications').value;
        
        // Log the job posting details (for demonstration)
        console.log('Job Title:', jobTitle);
        console.log('Requirements:', requirements);
        console.log('Qualifications:', qualifications);
        
        // Move to the next step (Candidate Application)
        window.location.href = 'candidate_application.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const jobPostingForm = document.getElementById('jobPostingForm');
    const candidateApplicationForm = document.getElementById('candidateApplicationForm');
    const reviewNextBtn = document.getElementById('reviewNextBtn');
    const jobDetailsContainer = document.getElementById('jobDetails');
    const candidateDetailsContainer = document.getElementById('candidateDetails');

    // Initialize variables to store job and candidate details
    let jobDetails = {};
    let candidateDetails = {};

    // Function to display job details
    function displayJobDetails() {
        jobDetailsContainer.innerHTML = `
            <h3>Job Details</h3>
            <p><strong>Job Title:</strong> ${jobDetails.jobTitle}</p>
            <p><strong>Requirements:</strong> ${jobDetails.requirements}</p>
            <p><strong>Qualifications:</strong> ${jobDetails.qualifications}</p>
        `;
    }

    // Function to display candidate details
    function displayCandidateDetails() {
        candidateDetailsContainer.innerHTML = `
            <h3>Candidate Details</h3>
            <p><strong>Name:</strong> ${candidateDetails.name}</p>
            <p><strong>Email:</strong> ${candidateDetails.email}</p>
            <p><strong>Resume:</strong> ${candidateDetails.resume}</p>
        `;
    }

    // Add event listener for the Job Posting form submission
    jobPostingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Get job details from the form
        jobDetails = {
            jobTitle: document.getElementById('jobTitle').value,
            requirements: document.getElementById('requirements').value,
            qualifications: document.getElementById('qualifications').value
        };
        // Display job details
        displayJobDetails();
    });

    // Add event listener for the Candidate Application form submission
    candidateApplicationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Get candidate details from the form
        candidateDetails = {
            name: document.getElementById('candidateName').value,
            email: document.getElementById('candidateEmail').value,
            resume: document.getElementById('resume').files[0].name
        };
        // Display candidate details
        displayCandidateDetails();
    });

    // Add event listener for the "Next" button click
    reviewNextBtn.addEventListener('click', function() {
        // Move to the next step (Interview Scheduling)
        window.location.href = 'interview_scheduling.html';
    });
});