const form =document.getElementById('myForm');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const email =document.getElementById('email').value.trim();
    const password =document.getElementById('password').value.trim();
    const loginsuc = document.getElementById('login');
    const EmailErrorDiv = document.getElementById('enterEmail');
    const PasswordErrorDiv = document.getElementById('enterPassword');
          let results = checkInputs(email,password);
          EmailErrorDiv.innerHTML = '';
            PasswordErrorDiv.innerHTML = '';
          if(results ==null || results ==" "){
            loginsuc.innerHTML='Login Successful';
            
          }
          if (results){
            
            if (results.EmailErrors){
                EmailErrorDiv.innerHTML = results.EmailErrors.join("") ;
            }
                
            if(results.PasswordErrors)
                 PasswordErrorDiv.innerHTML = results.PasswordErrors.join("") ;
          }

         });
         function checkInputs(email,password) {   
            let mailformat = /\S+@\S+\.\S+/;
            let PasswordErrors =[];
            let EmailErrors =[];

            if (email == "" ||email == null ) {
                EmailErrors.push('<span>please enter your email</span>')
            }
            if (password == "" ||password == null ) {
                PasswordErrors.push('<span>please enter your password</span>')
            }
            if (!(email.match(mailformat)) ) {
                EmailErrors.push('<span>please enter a valid email</span>')
            }
            if (password.length < 8) {
                PasswordErrors.push('<span>Password must be 8 characters at least</span>')
            }
            if (!(password.match(/[A-Z]/g))) {
                PasswordErrors.push('<span>please enter one capital letter at least</span>')
            }
            if (!(password.match(/[a-z]/g))) {
                PasswordErrors.push('<span>please enter one small letter at least</span>')
            }
            if (!(password.match(/[0-9]/g))) {
                PasswordErrors.push('<span>please enter one digit at least</span>')
            }
            if (!(password.match(/[^a-zA-Z\d]/g))) {
                PasswordErrors.push('<span>please enter one special character at least</span>')
            }
            if (EmailErrors.includes('<span>please enter your email</span>') ) {
                EmailErrors.pop('<span>please enter your email</span>')
            }
            if (PasswordErrors.includes('<span>please enter your password</span>') ) {
                PasswordErrors.pop('<span>Password must be 8 characters at least</span>');
                PasswordErrors.pop('<span>please enter one capital letter at least</span>');
                PasswordErrors.pop('<span>please enter one small letter at least</span>');
                PasswordErrors.pop('<span>please enter one digit at least</span>');
                PasswordErrors.pop('<span>please enter one special character at least</span>');

            }

        
            if(PasswordErrors.length === 0 && EmailErrors.length ===0)
                return null;
            return {EmailErrors:EmailErrors,PasswordErrors:PasswordErrors}
         }
