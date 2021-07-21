const addButton=document.getElementById('add-button')
const inputData=document.getElementById('todo-input')
const todoLists=document.getElementById('todo-lists')
const divData=document.querySelectorAll('.todo-items')
addButton.addEventListener('click',addIt)


 function addIt(){
    const note=[]
     const result=document.querySelector('#result')
     if(inputData.value==0){
        note.push('*Input field shouldnt be empty')
     }
     if(note.length>0){
        result.innerHTML=note.join(' ')
     }
     if(inputData.value!=0){
      result.innerHTML=" "
      let listArr=[]
      let userData=inputData.value;
      let getLocalStorage=localStorage.getItem('notes')
      if(getLocalStorage==null){
         lisArr=[]
      }else{
         listArr=JSON.parse(getLocalStorage)
      }
      listArr.push(userData)
      localStorage.setItem('notes',JSON.stringify(listArr))
      showTask()
      }
     inputData.value=' '
 }
 function showTask(){
   let listArr=[]
   let getLocalStorage=localStorage.getItem('notes')
   if(getLocalStorage==null){
      lisArr=[]
   }else{
      listArr=JSON.parse(getLocalStorage)
   }
   const arrLength=listArr.length
   const pendingTask=document.querySelector('#pendingTask')
   pendingTask.innerHTML=`You have ${arrLength} pending task(s)`
   let newTag=' '
   listArr.forEach((element,index) => {
      newTag +=`<div class="todo-items" onclick='deleteTask(${index})';>
      <p> ${element} </p>                    
      <button id="todo-delete">&times;</button>
      </div>`
   })
   todoLists.innerHTML=newTag
   inputData.value=' '
 }
 function deleteTask(index){
   let listArr=[]
   let getLocalStorage=localStorage.getItem('notes')
   listArr=JSON.parse(getLocalStorage)
   listArr.splice(index,1)
   localStorage.setItem('notes',JSON.stringify(listArr))
   showTask()
}