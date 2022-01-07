function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${lastName}` 
    }
}

const profile3 = () => {
    
    const newUser = new User("Anna", "Kovács");
    console.log(newUser);
    return <div>
        {newUser.fullName()}
        {newUser.firstName}
        {newUser.lastName}
    </div>
}


export default profile3;