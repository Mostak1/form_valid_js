

class emailClass {
    constructor(e, p, rp) {
        this.e1 = e;
        this.p2 = p;
        this.rp1 = rp;
    }
    eclassFunction() {
        let rex = /\S+@\S+\.\S+$/;
        let result = rex.test(this.e1);
        let rexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let resultP = rexp.test(this.p2);


        let nam = document.getElementById("name").value;
        let comm = document.getElementById("comm").value;
        let gete = document.getElementById("email").value;
        let getp = document.getElementById("pass").value;
        let getrp = document.getElementById("rpass").value;

        let win = window.open(" ", " ", "width=400px,height=500px");
        win.document.write(`<h1>Information Of ${nam}</h1>`);
        win.document.write(`Name : ${nam} <br>`);
        win.document.write(`Comment : ${comm} <br>`);

        if (result) {
            document.getElementById("emailerror").innerHTML = `<p style="color: green;">Your email is valid </p>`
            win.document.write("Email :" + gete + "<br>");
        } else {
            // alert("Email Is Not valid");
            document.getElementById("emailerror").innerHTML = `<p style="color: brown;">Invalid;Exm:username@domain.extension </p>`
        }
        if (resultP) {
            document.getElementById("passerror").innerHTML = `<p style="color: green;">Password Strong And Good</p>`
            win.document.write("Password :" + getp + "<br>");
        } else {
            document.getElementById("passerror").innerHTML = `<p style="color: brown;">Must contain at least  one number and <br> one uppercase and lowercase letter<br> and at least 8 or more characters </p>`

        }
        let pw1 = document.getElementById("pass").value;
        let rpw = document.getElementById("rpass").value;
        if (pw1 != rpw) {
            document.getElementById("rpasserror").innerHTML = `<p style="color: red;">Password Not Match</p>`
        } else {
            document.getElementById("rpasserror").innerHTML = `<p style="color: green;">Password Match</p>`
            win.document.write("Email :" + rpw + "<br>");

        }
        win.document.write(`<button onclick="window.print()">Print this page</button>`);

    }

};

function emailCheck() {
    
    let gete = document.getElementById("email").value;
    let getp = document.getElementById("pass").value;
    let getrp = document.getElementById("rpass").value;
    let obj = new emailClass(gete, getp, getrp);
    obj.eclassFunction();
};
