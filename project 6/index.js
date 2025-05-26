

function generatepassword(length,includelowercase,includeuppercase,includenumbers,includesymbols){
   
   const lowercase="abcdefghijklmnopqrstuvwxyz";
   const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const number="0123456789";
   const symbol="!@#$%^&*()_-+=";

   let allowedchars="";
   let password="";

   allowedchars+=includelowercase ? lowercase:"";
   allowedchars+=includeuppercase ? uppercase:"";
   allowedchars+=includenumbers ? number:"";
   allowedchars+=includesymbols ? symbol:"";

   if(length<=0)
   {
    return `(password length must be at least 1)`
   }
   if(allowedchars.length===0){
    return `(at least 1 set of character to be selected)`
   }

   for(let i =0;i<length;i++){
    const randomindex=Math.floor(Math.random()*allowedchars.length);
    password+=allowedchars[randomindex]
   }

   
   
    return password;
}

const passwordlength=12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true;

const password=generatepassword(passwordlength,
                                includelowercase,
                                includeuppercase,
                                includenumbers,
                                includesymbols);

console.log(`generated password : ${password}`)
