const colluseum = {
    "floor":"sand",
    "shape":"circle",
    "fighters": []
}

colluseum.load = function(){
    this.fighters[0] = fighter.new("Warrior", 10, 3, 6);
    this.fighters[1] = fighter.new("Monk", 3, 9, 1);
}

     colluseum.go = function(){
        let fighter1 = this.fighter[0];
        let fighter2 = this.fighters[1];
        while(fighter1.hp > 0 && fighter2.hp > 0){
            if(this.FirstPlayersTurn){
                fighter1.hp = fighter1.hp - 2;
            }else{

            }
            fighter2.hp = fighter2.hp - 2;
        }
        this.firstPlayersTurn = !this.firstPlayersTurn
     }