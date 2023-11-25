window.addEventListener("DOMContentLoaded",()=>{
    main()
})

function main() {

}

function validationCheck() {
    const inputData = {
        user: document.getElementById("user").value,
        pass: document.getElementById("password").value,
        mail: document.getElementById("mail").value
    }
    const errorIds = doValidationCheck(inputData)
    if(errorIds.length=0) {
        console.log("大丈夫だ、問題ない")
    } else {
        displayValidationError(errorIds)
        console.error("一番良いのを頼む")
    }
}

function doValidationCheck(input) {
    let errors = []
    errors = errors.concat(userValidationCheck(input.user))
    errors = errors.concat(passValidationCheck(input.pass))
    errors = errors.concat(mailValidationCheck(input.mail))
    console.log(errors)
    return errors
}

function userValidationCheck(user) {
    let errors = []
    if(user.length<=0) {
        console.error("ユーザ名がないです")
        errors.push("1")
    } else if(user.length<8) {
        console.error("ユーザ名は８文字以上でよろしくおねがいします")
        errors.push("2")
    }
    if(user.length>12) {
        console.error("ユーザ名がながすぎます(１２字以下)")
        errors.push("3")
    }
    if(user.match(/[^a-zA-Z0-9]/)) {
        console.error("英語か数字で入力")
        errors.push("4")
    }
    return errors
}

function passValidationCheck(pass) {
    let errors = []
    if(pass.length<=0) {
        console.error("パスがないです")
        errors.push("5")
    } else if(pass.length<8) {
        console.error("パスは8文字以上です")
        errors.push("6")
    } else if(pass.length>12) {
        console.error("パスは12文字以内です")
        errors.push("7")
    }
    if(pass.match(/[^a-zA-Z0-9]/)) {
        console.error("英語が数字で")
        errors.push("8")
    }
    return errors
}

function mailValidationCheck(mail) {
    let errors = []
    if(mail.length<=0) {
        console.error("入力がないです")
        errors.push("9")
    }
    if(!mail.match(/.+@.+\..+/)) {
        console.error("メール形式が違います")
        errors.push("10")
    }
    return errors
}

function displayValidationError(errorIds) {

}