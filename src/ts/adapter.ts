//class Target can only read numbers from low to high
class Target 
{
    targetArray: any;
    
    public numberA(): number[] 
    {
        this.targetArray.push(1,2,3,4,5);
        return this.targetArray;        
    }
}

//class Origin has random numbers.
class Origin 
{
    originArray: any;
    
    public numberB(): number[] 
    {
        this.originArray.push(3,1,8,9,20,5);
        return this.originArray;        
    }
}

//class Adapter has number orderer.
//var numbers: number[] = [3, 1, 8, 9, 20, 5];
//var sorter: number[] = numbers.sort((n1,n2) => n1 - n2);

//console.log(numbers);

class Adapter extends Target {
    private origin: Origin;

    constructor(origin: Origin) {
        super();
        this.origin = origin;
    }

    public numberA(): number[]
    {
        const result = this.origin.numberB;
        return result();
        //var numbers: number[] = [3, 1, 8, 9, 20, 5];
        //const sorter: number[] = origin.sort((n1,n2) => n1 - n2);
        //const result = this.origin.specificRequest().split('').reverse().join('');
        //return `Adapter: (TRANSLATED) ${result}`;
    }
}
console.log(origin);
//const adapter = new Adapter(origin);

//class Target can only read numbers from low to high
//class Origin has random numbers.
//class Adapter has number orderer.

//const adapter = new Adapter(origin); should give the Orinin array in a orderly manner.
