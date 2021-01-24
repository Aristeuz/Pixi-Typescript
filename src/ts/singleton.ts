class Singleton {
    private static instance: Singleton;
    private constructor() {}
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    } 
}

const action1 = Singleton.getInstance();
const action2 = Singleton.getInstance();
console.log(action1 === action2);