(()=>{

    //Ejemplo NO aplicando el principio de responsabilidad unica.
    type Gender = 'M'|'F';

    class Person {
        constructor(
        public name: string,
        public gender: Gender,
        public birthdate: Date,
     
        ){}
    }

    class User extends Person{

        public lastAccess: Date;

        constructor(

            public emails: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name,gender,birthdate)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(email, role, name, gender, birthdate)
        }
    }
    // const newPerson = new Person('Bruno',"M", new Date('1990/01/02'))
    // console.log(newPerson);
    
    const newUserSettings = new UserSettings(
        'usr/home',
        'home',
        'prueba@yopmail.com',
        'admin',
        'Bruno',
        "M",
        new Date('1990/01/02')
    )

    console.log(newUserSettings);
    

})();