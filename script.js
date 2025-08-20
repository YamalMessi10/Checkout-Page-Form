let childCount = 0
let manCount = 0
let womanCount = 0
function add(memberType){
    if(memberType==='child'){
        childCount++
    }else if(memberType==='man'){
        manCount++
    }else if(memberType==='woman'){
        womanCount++
    }
    updateResult()
}
function updateResult(){
    document.getElementById('result').textContent = `Number of Men: ${manCount} | Number of Women: ${womanCount} | Number of Children: ${childCount} `
}
