// Реалізація класу User
class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Невірно введено поле role');
      return;
    }
    this.name = name;
    this.role = role;
    this.isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`${this.name} увійшов`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.name} вийшов`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Ім'я змінено на ${this.name}`);
  }

  changePassword(newPassword) {
    // Для прикладу просто лог
    console.log(`Пароль змінено`);
  }
}

// Реалізація класу Admin, що успадковує User
class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`Користувач ${user.name} доданий`);
  }

  removeUser(userName) {
    this.users = this.users.filter((user) => user.name !== userName);
    console.log(`Користувач ${userName} видалений`);
  }

  changeUserRole(userName, newRole) {
    if (newRole !== 'admin' && newRole !== 'user') {
      alert('Невірно введено поле role');
      return;
    }
    const user = this.users.find((user) => user.name === userName);
    if (user) {
      user.role = newRole;
      console.log(`Роль користувача ${userName} змінена на ${newRole}`);
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('Всі користувачі видалені');
  }
}

// Приклад використання
const admin = new Admin('Petro');
const user1 = new User('Ivan', 'user');
const user2 = new User('Oksana', 'user');

admin.addUser(user1);
admin.addUser(user2);
console.log(admin.getAllUsers());
admin.changeUserRole('Ivan', 'admin');
admin.removeUser('Oksana');
console.log(admin.getAllUsers());
