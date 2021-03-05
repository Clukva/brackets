module.exports = function check(str, bracketsConfig){
  //let bracketsConfig = []
 /*   let brackets = bracketsConfig.join('').replace(/,/g, '');
   let stack = [];
  
   
     //for(let i = 0; i < brackets.lenght; i++)
     for (let bracket of str){
       let bracketsIndex = brackets.indexOf(bracket)
          if(bracketsIndex % 2 === 0){
            stack.push(bracketsIndex)
          } //else if(bracketsIndex % 2 !== 0)
           else {
            if (stack.pop() !== bracketsIndex){
              //stack.pop()
              return false
            }

          }
            
        }
        return stack.length === 0
} */
      /* for(let j = i + 1;  j < str.lenght; j++){
        if(str[[i][j]] === bracketsConfig[x][y] && ){

        }
      } */
     /* }
     if(stack.length === 0){
       return true
     } else{
       return false
     } */

  /* for (let i = 0; i <str.length; i++){ 
    let bracketsIndex = brackets.indexOf(str)

           
    if (bracketsIndex % 2 === 0){
      stack.push(bracketsIndex + 1)
    } else{
      if(stack.pop() !== bracketsIndex){
        return false
      }
    }
  }
  
  return stack.length === 0 */
//}
//function check()
//return check()  ? true : false;
//}
//function check(str, bracketsConfig) 
//{
   
/*    let brackets = bracketsConfig.join('').replace(/,/g, '');
      let stack = [];
  for (let bracket of str){
          let Index = brackets.indexOf(bracket)

          if (Index % 2 === 0) {
              
              if (bracket === brackets[Index + 1] && stack[stack.length - 1] === Index){
                  stack.pop();
              } 
              else if (bracket === brackets[Index + 1] && stack[stack.length - 1] !== Index) {
                  stack.push(Index)
              }
              else{
                  stack.push(Index)
              }
          } 
          else {
              if (stack.pop() !== Index-1){
                  return false;
              }
          }
          
      }
      if(stack.length === 0){
      return }
  
}  */



 
//
   
  let brackets = bracketsConfig.join('').replace(/,/g, '');
      let stack = [];
  for (let bracket of str) {
          let Index = brackets.indexOf(bracket)

          if (Index % 2 === 0) {
              
              if (bracket === brackets[Index + 1] && stack[stack.length - 1] === Index){
                  stack.pop();
              } else if (bracket === brackets[Index + 1] && stack[stack.length - 1] !== Index) {
                  stack.push(Index)
              }
              else{
                  stack.push(Index)
              }
          } 
          else {
              if (stack.pop() !== Index-1){
                  return false;
              }
          }
          
      }
      
      return stack.length === 0
  
} 