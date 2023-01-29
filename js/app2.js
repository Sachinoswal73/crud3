
let students = [
    {
        fname : 'Vinit',
        lname : 'Mishra',
        email : 'vinit@gmail.com',
        contact : 9922993993
    },
    {
        fname : 'Pratik',
        lname : 'Jain',
        email : 'pratik@yahoo.com',
        contact : 9023904528
    }
];


let jstudents = ``;


const templating = () => {

students.forEach( ( stdn, i ) => {
    jstudents += `
        <tr>
            <td>${ i + 1 }</td>
            <td>${ stdn.fname }</td>
            <td>${ stdn.lname }</td>
            <td>${ stdn.email }</td>
            <td>${ stdn.contact }</td>
            <td> -- </td>
        </tr>
    `;
} );

console.log(students);

// document.getElementById("hstudents").innerHTML = jstudents;

} 

templating();



let jStdForm = document.getElementById("stdForm");
let jFname = document.getElementById("fname");
let jLname = document.getElementById("lname");
let jEmail = document.getElementById("email");
let jContact = document.getElementById("contact");
let jSubmit1 = document.getElementById("submit1");

// templating(), call templating twice, ls.set , ls.get , if condition
// uuid function, 

const addNewObject = (eve) => { 
    eve.preventDefault(); // it would'nt reload the page on every submit

    let obj = {
        fname : jFname.value,
        lname : jLname.value,
        email : jEmail.value,
        contact : Number(jContact.value)
    }

    students.push(obj);
    
    templating();

    jStdForm.reset();

 }

jStdForm.addEventListener("submit", addNewObject);
// jSubmit1.addEventListener("click", addNewObject);




