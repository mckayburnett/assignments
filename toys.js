const employees = []
function Employee (name, jobTitle, salary, status){
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary
    this.status = "Full Time"
}
Employee.prototype.printEmployeeForm = function(){
    console.log(this.name, this.jobTitle, this.salary, this.status)
}
const mckay = new Employee("McKay Burnett", "Backend Developer", 180000)

console.log(mckay.printEmployeeForm())