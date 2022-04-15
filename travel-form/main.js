const form1 = document.form
const button = document.form.button

form1.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = form1.firstName.value;
    const lastName = form1.lastName.value;
    const age = form1.age.value;
    const gender = form1.gender.value;
    const destination = form1.destination.value;
    const checkedDiet = []
    const checkedBoxes = form1.querySelectorAll("input[name=diet]:checked")
    for (let i=0; i<checkedBoxes.length; i++){
        console.log(checkedBoxes[i].value)
        checkedDiet.push(checkedBoxes[i].value);
    }
    
    alert("Full Name: " + firstName + "" + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Needs: " + checkedDiet);
})


