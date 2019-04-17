export class Employee
{
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    mobile : string;
    password : string;
    salary : string;
    role : string;

    constructor(i,f,l,e,m,r,s,p)
    {
        this.id = i;
        this.firstName =  f;
        this.lastName = l;
        this.email = e;
        this.mobile = m;
        this.password = p;
        this.role = r;
        this.salary = s;
    }
}