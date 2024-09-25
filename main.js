var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Type Assertion
    var profilePictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var exprienceElement = document.getElementById('exprience');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && exprienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var exprience = exprienceElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Creat Resume Output
        var resumeOutput = "\n    <h2>Resume Output</h2> \n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n    <h3>Education</h3>\n    <p> ").concat(education, " </p>\n\n    <h3>Skills</h3>\n    <p> ").concat(skills, " </p>\n\n    <h3>Exprience</h3>\n    <p> ").concat(exprience, " </p>\n\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output element are missing');
        }
    }
    else {
        console.error('One or more output element are missing');
    }
});
