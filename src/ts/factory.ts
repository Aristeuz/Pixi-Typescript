class Enemy 
{
    name: string;
    health: number;
    energy: number;

    constructor(name: string, health: number,energy: number) 
    {
        this.name = name;
        this.health = health;
        this.energy = energy;
    }
}

function createEnemy(name: string, health: number, energy: number)
{
    return new Enemy(name, health, energy);
}

const Goomba = createEnemy('goomba',20,10);
const Koopa = createEnemy('koopa',40,30);


console.log(Goomba);
console.log(Koopa);