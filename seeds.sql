USE employee_DB;
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Management");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Service");
INSERT INTO department (name)
VALUES ("Customer service");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("HR", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales manager", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Assistance", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "Brown", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Allen", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christian", "Eckenrode", 1, 2);

