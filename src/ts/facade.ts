class Stove
{
    turnOn() 
    {
        console.log('Turning on stove')
    }
    
    increaseHeat() 
    {
        console.log('Heat went up by one level')
    }

    decreaseHeat() 
    {
        console.log('Heat went down by one level')
    }

    turnOff() 
    {
        console.log('Turning off stove')
    }
}

class Fridge
{
    Open() 
    {
        console.log('Opening fridge')
    }

    TakeOutVegtables() 
    {
        console.log('Taking vegtables')
    }

    Close() 
    {
        console.log('Closing fridge')
    }
}

class CutVegtables
{
    Cut() 
    {
        console.log('cutting vegtables')
    }
}

class automatedCookingFacade 
{
    private stove: Stove;
    private fridge: Fridge;
    private cutVegtables: CutVegtables;

    constructor(stove: Stove, fridge: Fridge, cutVegtables: CutVegtables)
    {
        this.stove = stove;
        this.fridge = fridge;
        this.cutVegtables = cutVegtables;
    }

    public prepareFood()
    {
        this.fridge.Open();
        this.fridge.TakeOutVegtables();
        this.fridge.Close();
        this.cutVegtables.Cut;
    }

    public useStove()
    {
        this.stove.turnOn();
        this.stove.increaseHeat();
    }

    public prepareFullMeal() 
    {
        this.stove.turnOn();
        this.stove.increaseHeat();

        this.fridge.Open();
        this.fridge.TakeOutVegtables();
        this.fridge.Close();

        this.cutVegtables.Cut();       
    }
}

let stove = new Stove;
let fridge = new Fridge;
let cutVegtables = new CutVegtables;

let automatedCooking = new automatedCookingFacade(stove, fridge, cutVegtables);

automatedCooking.prepareFullMeal();