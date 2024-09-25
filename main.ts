document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    //Type Assertion
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const exprienceElement = document.getElementById('exprience') as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement &&   educationElement && skillsElement && exprienceElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const exprience = exprienceElement.value;
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '' ;

        //Creat Resume Output
        const resumeOutput = `
    <h2>Resume Output</h2> 
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilepicture">` : '' }
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>

    <h3>Education</h3>
    <p> ${education} </p>

    <h3>Skills</h3>
    <p> ${skills} </p>

    <h3>Exprience</h3>
    <p> ${exprience} </p>

    `;

        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        }
        else {
            console.error('Resume output element are missing')
        }
    } else {
        console.error('One or more output element are missing')

    }

})