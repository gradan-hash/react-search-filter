const users = [];

for (let i = 0; i < 40; i++) {
  const user = {
    id: i + 1,
    first_name: generateFirstName(),
    last_name: generateLastName(),
    email: generateEmail(),
    gender: generateGender()
  };
  users.push(user);
}

function generateFirstName() {
  const firstNames = [
    'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia',
    'Mia', 'Charlotte', 'Amelia', 'Evelyn', 'Abigail',
    'Emily', 'Harper', 'Elizabeth', 'Avery', 'Sofia',
    'Ella', 'Madison', 'Scarlett', 'Victoria', 'Chloe'
  ];
  const randomIndex = Math.floor(Math.random() * firstNames.length);
  return firstNames[randomIndex];
}

function generateLastName() {
  const lastNames = [
    'Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson',
    'Jackson', 'Lee', 'Harris', 'Clark', 'Lewis',
    'Young', 'Allen', 'King', 'Wright', 'Scott',
    'Green', 'Baker', 'Adams', 'Nelson', 'Carter'
  ];
  const randomIndex = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
}

function generateEmail() {
  const email = generateFirstName().toLowerCase() + '.' + generateLastName().toLowerCase() + '@example.com';
  return email;
}

function generateGender() {
  const genders = ['male', 'female'];
  const randomIndex = Math.floor(Math.random() * genders.length);
  return genders[randomIndex];
}

export { users };
