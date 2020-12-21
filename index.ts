function innerFunction(callback){
  return callback(true);
}
function innerFunction2(callback){
  return callback(false);
}

  function outerFunction(){
    try {
      innerFunction(callback=>{
        if(callback){
          console.log('tttt');
          try {
            innerFunction2(callback2=>{
              if(callback2){
                console.log(' i am chaild')

              }else{
                throw new Error('i am chaild error , need parent')
              }
            })
            
          } catch (error) {
            console.log('iiii');
            throw error            
          }


        }else{
          throw new Error(' sss');
        }

      });
    } catch (error) {
      console.log('i am parent');
      console.log(error);
      
    }

  }

  outerFunction();