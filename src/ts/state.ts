class State{

        flight: Flight;

        showPassport();
        showTicket();
        continue();
        bailOut();

}

class Flight 
{
    public gateState: State;
    public verificationState: State;
    public boardingState: State;
    public flyingState: State;

    public currentState: State;

    constructor() 
    {
        this.gateState = new gateState(this);
        this.verificationState = new verificationState(this);
        this.boardingState = new boardingState(this);
        this.flyingState = new flyingState(this);

        this.setState(this.gateState);
    }

    public setState(state: State)
    {
        this.currentState = state;
    }

    public getState(): State 
    {
        return this.currentState;
    }
}

class gateState implements State
{
    flight: Flight;
    constructor (flight: Flight)
    {
        this.flight = flight;
    }

    showTicket() {
        console.log("You may continue.");
        this.flight.setState(this.flight.verificationState);
    }
    showPassport() {
        console.log("First I'll need your ticket.");
    }
    continue() {
        console.log("You may not continue.");
    }
    bailOut() {
        console.log("You leave.");
    }  
}

class verificationState implements State
{
    flight: Flight;
    constructor (flight: Flight)
    {
        this.flight = flight;
    }

    showTicket() {
        console.log("I have your ticket already.");
    }
    showPassport() {
        console.log("Thank you.");
        this.flight.setState(this.flight.boardingState);
    }
    continue() {
        console.log("You may not continue.");
    }
    bailOut() {
        console.log("You leave.");
    }  
}

class boardingState implements State
{
    flight: Flight;
    constructor (flight: Flight)
    {
        this.flight = flight;
    }

    showTicket() {
        console.log("You don't need that here.");
    }
    showPassport() {
        console.log("You don't need that here.");
    }
    continue() {
        console.log("This way.");
        this.flight.setState(this.flight.flyingState);
    }
    bailOut() {
        console.log("You leave.");
    }  
}

class flyingState implements State
{
    flight: Flight;
    constructor (flight: Flight)
    {
        this.flight = flight;
    }

    showTicket() {
        console.log("You don't need that here.");
    }
    showPassport() {
        console.log("You don't need that here.");
    }
    continue() {
        console.log("You continue flying.");
    }
    bailOut() {
        console.log("It's too late now.");
    }  
}