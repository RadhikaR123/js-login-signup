



//      ********code  starts from here*************

const a=require("readline-sync");
function pasword(password){
    if(password.length>6 && password.length<16){
        if(password.includes("#") || password.includes("@") || password.includes("$")){
            if(password.match(/[0-9]/g)){
                if(password.match(/[a-z]/g)){
                    if(password.match(/[A-Z]/g)){
                        console.log("it is strong password")
                        pas=password
                        console.log(pas)
                    }
                    else{
                        console.log("password should contain atleast one upper case.")
                        password=a.question("enter password again :")
                        pasword(password)
                    }
                }
                else{
                    console.log("password should contain atleast one lower case.")
                    password=a.question("enter password again :")
                    pasword(password)
                }
            }
            else{
                console.log("password should contain atleast one digit.")
                password=a.question("enter password again :")
                pasword(password)
            }
        }
        else{
            console.log("password should contain atleast one special character.")
            password=a.question("enter password again :")
            pasword(password)
        }

    }
    else{
        console.log("password length should be between 6 to 16.")
        password=a.question("enter password again :")
        pasword(password)
    }

}

function confirm_password(pas,password1){
    if(password1==pas){
        console.log("password created and matched...")
    }
    else{
        console.log("both password are not same.")
        password1=a.question("enter password again :")
        confirm_password(pas,password1)
    }
}

var user_choice=a.question("what do you want login or signup: 1:sign-up   ,  2:login")
const fs=require('fs')
var file=fs.existsSync("radhika.json")

if(file==false){
    if(user_choice=="1"){
        user_name=a.question("enter your name: ")
        password=a.question("enter password ; ")
        pasword(password)

        password1=a.question("confirm your password :")
        confirm_password(pas,password1)

        console.log("congratulations",user_name,"youhave signed in successfullu")
        console.log("now fill some  more informations..")

        DOB=a.question("enter your date of birth : ")
        hobby=a.question("what is your habby ;")
        gender=a.question("male or female :")
    }
    my_list=[]
    user_detail={}
    user_detail["name"]=user_name
    user_detail["password"]=password1
    user_detail["DOb"]=DOB
    user_detail["hobby"]=hobby
    user_detail["gender"]=gender

    console.log(user_detail)

    my_list.push(user_detail)
    console.log(my_list)

    fs.writeFileSync("radhika.json",JSON.stringify(my_list,null,4))
    console.log(user_name,"your account successfully created..")
}
else if(file==true){
    if(user_choice=="1"){
        user_name=a.question("enter your name: ")
        password=a.question("enter password ; ")
        pasword(password)

        password1=a.question("confirm your password :")
        confirm_password(pas,password1)

        data1=fs.readFileSync("radhika.json","utf8")

        if(data1.includes(user_name)){
            console.log("this account already exists..")
        }
        else{
            console.log("congratulations",user_name,"you are signed up successfully..")
            console.log("now fill some  more informations..")

            DOB=a.question("enter your date of birth : ")
            hobby=a.question("what is your habby ;")
            gender=a.question("male or female :")
            user_detail={}
            user_detail["name"]=user_name
            user_detail["password"]=password1
            user_detail["DOb"]=DOB
            user_detail["hobby"]=hobby
            user_detail["gender"]=gender
        
            console.log(user_detail)

            data1=fs.readFileSync("radhika.json","utf8")
            data=JSON.parse(data1)
            data.push(user_detail)
            fs.writeFileSync("radhika.json",JSON.stringify(data,null,4))

        }

    }
    else if(user_choice=="2"){
        login_name=a.question(" enter the name: ")
        login_password=a.question("enter log in password ; ")
        p=fs.readFileSync("radhika.json","utf8")
        var data=JSON.parse(p)
        let flag=true
        for(i of data){
            if(i["name"]==login_name && i["password"]==login_password){
                console.log("login successfully..")

            }
            else{
                console.log("user name or password doesn't match..")
            }
        }
    }

}
