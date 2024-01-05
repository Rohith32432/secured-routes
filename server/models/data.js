const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Rohith', role: ROLE.ADMIN },
      { id: 2, name: 'venkata', role: ROLE.BASIC },
      { id: 3, name: 'SAI', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Rohith's Project", userId: 1 },
      { id: 2, name: "venkata's Project", userId: 2 },
      { id: 3, name: "SAI's Project", userId: 3 }
    ]
  }