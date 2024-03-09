const BaseURL = `http://localhost:8080` ;

const signup = document.getElementById("signup");

signup.addEventListener("click", async() => {
    const username = document.getElementById("username").value ;
    const email = document.getElementById("email").value ;
    const password = document.getElementById("password").value ;

    const signupForm = document.getElementById("signup-form");
    signupForm.innerHTML = `
      <input type="text" id="otp" placeholder="Enter OTP">
      <button id="submitOTP">Submit OTP</button>
    `;
    const submitOTP = document.getElementById("submitOTP");

    submitOTP.addEventListener("click", async() => {
       try {
        const OTP = document.getElementById("otp").value ;
        const obj = { OTP };
        const res = await fetch(`${BaseURL}/user/submitOTP`,{
            method : "POST" ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        });
        const data = await res.json();
        console.log(data);
       }catch(error){
         console.log(error);
       }
    })
    
    try{
        let obj = {
            username ,
            email ,
            password
        }
       const res = await fetch(`${BaseURL}/user/sendOTP`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
       });
       const data = await res.json();
       console.log(data);
    }catch(error){
        console.log(error);
    }
});

