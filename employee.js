const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employee_DB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What do you want to do?',
      choices: [
        'View all employees',
        'View all employees by department',
        'View all employees by roles',
        'Add an emplyee',
        'Remove an employee',
        'Update an employee',
        'Update an employee role',
        'Update an employee department',
        'Exit'
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all employees':
          empSearch();
          break;

        case 'View all employees by department':
          depSearch();
          break;

        case 'View all employees by roles':
          roleSearch();
          break;

        case 'Add an emplyee':
          empAdd();
          break;

        case 'Remove an employee':
          empRemove();
          break;
          
        case 'Update an employee':
          empUpdate();
          break; 

        case 'Update an employee role':
          roleUpdate();
          break;
           
        case 'Update an employee department':
          depUpdate();
          break;
        
          case "Exit":
            connection.end();
            break;

        default:
          console.log(`Invalid action: ${answer.action} xxxxxxxxxxxx`);
          break;
      }
    });
};
const empSearch = () => {
  console.log('√√√√√ View all employees...√√√√√√\n');
  // connection.query("SELECT * FROM employees", (err, res) => {
  //   console.log(res);
  //   if (err) throw err;
  //   console.table(res);
  //   runSearch();
  // })
  let query =
        'SELECT employees.id, employees.first_name, employees.last_name,roles.title,roles.salary,manager_id';
      query +=
        'FROM employees INNER JOIN roles ON (employees.role_id = roles.id)'
      // query +=
      //   'FROM employees INNER JOIN departments ON (roles.department_id = departments.id)';
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runSearch();
  });
};

const depSearch = () => {
  console.log('√√√√√ View all departments...√√√√√√\n');
  connection.query("SELECT * FROM departments", (err, res) => {
    console.log(res);
    if (err) throw err;
    console.table(res);
    runSearch();
  })
};

const roleSearch = () => {
  console.log('√√√√√ View all roles...√√√√√√\n');
  connection.query("SELECT * FROM roles", (err, res) => {
    console.log(res);
    if (err) throw err;
    console.table(res);
    runSearch();
  })
};

const empAdd = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first',
      message: "What is the employee's first name?"
    },
    {
      type: 'input',
      name: 'last',
      message: "What is the employee's last name"
    },
    {
      type: 'input',
      name: 'role',
      message: "What is the employee's role ID?"
    },
    {
      type: 'input',
      name: 'managerID',
      message: "What is the manager's ID?"
    }
  ])
    .then((res) => {
      connection.query('INSERT INTO employees SET ?',
        {
          first_name: res.first,
          last_name: res.last,
          role_id: res.role,
          manager_id: res.managerID,
        },
        (err) => {
          if (err) throw err;
          console.log("√√√√√√You have added a new employee +1 √√√√√√√");
          runSearch();
        });
    });
};

const empRemove = () => {
  inquirer
    .prompt({
      name: 'empID',
      type: 'input',
      message: 'Which employee do u want to remove?(by id)',
    })
    .then((res) => {
    connection.query(`DELETE FROM employee WHERE id=${empID}`, (err, res) => {
      if (err) throw err;
      
      console.table(res);
      runSearch();
     });
    });
};

// const empUpdate = () => {};
// const roleUpdate = () => {};
// const depUpdate = () => {};
