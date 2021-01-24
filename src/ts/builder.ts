
class Office
{
    desks:any;
    constructor(desks:any ) 
    {
        this.desks = desks;
    }
}


class OfficeBuilder 
{
    office: any;
    constructor(desks:any) 
    {
        this.office = new Office(desks);
    }

    SetChair(chairs:any) {
        this.office.chairs = chairs;
        return this;
    }

    SetWindow(windows:any) {
        this.office.windows = windows;
        return this;
    }

    SetLight(lights:any) {
        this.office.lights = lights;
        return this;
    }

    build() {
        return this.office;
    }
}

let office = new OfficeBuilder(3).SetChair("very comfortable ones").SetWindow(5).SetLight(0).build();
console.log(office);