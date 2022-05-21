const inquirer=require("inquirer");

var values={
    zombie:{
        health: parseInt(100),
        damage_point:Math.floor(Math.random()*20)+1
    },
    me:{
        health: parseInt(100),
        damage_point:Math.floor(Math.random()*20)+1
    }
}

random_value=()=>{
    return Math.floor(Math.random()*5)+1;
}

var run = function () {
    inquirer.prompt([
        {
            name: "value",
            message: "Guess the value between 1-5?",
            type: "number"
        }
    ]).then(function (response) {

        if(response.value>=1 && response.value<=5 ){
                let check_equality=random_value();
                if (response.value == check_equality ) 
                {
                
                    values.zombie.health-=values.me.damage_point;
                    console.log("You hit the zombie");
                    console.log(`You are  ${values.me.health}, Zombie is ${values.zombie.health}`);
                    
                } 
                else 
                    {
                    
                        values.me.health-=values.zombie.damage_point;
                        
                        console.log("Zombie hit you");
                        console.log(`You are  ${values.me.health}, Zombie is ${values.zombie.health}`);            
                    }    

                if(values.zombie.health>0 && values.me.health>0)
                {
                    run();
                }
                else{
                            if( values.me.health <=0)console.log("Zombie Won")
                            else console.log("You Won")
                }
        }


            else console.log("Wrong Input");


            });

        }

run();