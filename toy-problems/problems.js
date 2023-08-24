const employees = []

function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`${this.name} is a ${this.jobTitle} who makes $${this.salary} annualy and works ${this.status}`)
}

const mckay = new Employee("McKay Burnett", "Backend Developer", 180000)
const nicole = new Employee("Nicole Burnett", "Tiktok influencer", 50000, "Part Time")
const jacob = new Employee("Jacob Burnett", "Mischier Causer", -60000)

mckay.printEmployeeForm()
nicole.printEmployeeForm()
jacob.printEmployeeForm()

console.log(mckay)