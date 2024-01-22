const addStudentButton = document.querySelector('#addStudentButton');

    addStudentButton.addEventListener('click', addStudent);

    function addStudent() {
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const age = document.getElementById('age').value;

      if (!name || !surname || !age) {
        alert('Please fill in all fields.');
        return;
      }

      const student = { name, surname, age };
      displayStudent(student);
      clearForm();
    }

    function displayStudent(student) {
      const studentsList = document.getElementById('studentsList');
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${student.name}, Surname: ${student.surname}, Age: ${student.age}`;
      studentsList.appendChild(listItem);
    }

    function clearForm() {
      document.getElementById('name').value = '';
      document.getElementById('surname').value = '';
      document.getElementById('age').value = '';
    }