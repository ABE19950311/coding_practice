window.addEventListener("DOMContentLoaded",()=>{
    main()
})

function main() {
    //すべてのinput要素を配列で取得する
    //const sel = document.querySelectorAll("input")

    //class none が含まれる全ての要素を配列で取得する
    //class名は.で指定する
    //const sel = document.querySelectorAll(".none")

    //id hoge が含まれる全ての要素を配列で取得する
    //id名は#で指定する
    //const sel = document.querySelectorAll("#hoge")

    //id属性を持つ全ての要素を配列で取得する
    //const sel = document.querySelectorAll("[id]")

    const idArr = []
    const duplicateId = []

    document.querySelectorAll("[id]").forEach((elm)=>{
        //id属性の値を取得する
        const id = elm.getAttribute("id")
        if(idArr.includes(id)) {
            duplicateId.push(id)
        } else {
            idArr.push(id)
        }
    })

    if(duplicateId.length>0) {
        console.log("重複あるよ！",duplicateId)
    } else {
        console.log("重複ないよ！")
    }

    // sel.forEach((elm)=>{
    //     elm.classList.add("hehe")
    // })
    // sel.forEach((elm)=>{
    //     elm.classList.add("hoge")
    // })
    // sel.forEach((elm)=>{
    //     let id = elm.getAttribute("id")
    //     console.log(id)
    // })
}