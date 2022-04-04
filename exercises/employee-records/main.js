var employees = []

function Employee(name, jobTitle, salary, status = "Full-time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        return "Hello, my name is " + this.name + " and I am a " + this.jobTitle + " making a salary of " + this.salary + " with a working status of: " + this. status
    }
} 

var mckay = new Employee("McKay", "Student", "$0")
var nicole = new Employee("Nicole", "Crypto Trader", "$60k")
var jacob = new Employee("Jacob", "Designer", "$70k", "Contract")

employees.push(mckay, nicole, jacob)

console.log(employees)