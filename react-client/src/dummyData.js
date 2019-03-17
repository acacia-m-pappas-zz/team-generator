import faker from 'faker';

module.exports = {
  teachers: [
    {
      email: 'MrsFrizzle@gmail.com',
      classes: [
          { 
            className: 'magic school bus ride!',
            students: [
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 3
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 5,
                  'quantativeReasoning': 5
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              }
            ]
        },
        {
          className: 'health 101',
          students: {}
        },
        {
          className: 'social studies 101',
          students: {}
        },
        {
          className: 'coding 101',
          students: {}
        }
      ]

    },
    
    {
      email: 'JoshElder@gmail.com',
      classes: [
        { 
            className: 'hrsf110',
            students: [
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 5,
                  'quantativeReasoning': 5
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              }
            ]
        }
      ]

    },
    {
      email: 'Mya@gmail.com',
      classes: [
        { 
            className: 'hrsf111',
            students: [
              {
                firstName: 'Delos Montgomery',
                lastName: 'Elder III',
                qualities: {
                  'qualatativeReasoning': 4,
                  'quantativeReasoning': 4
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 5
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 5,
                  'quantativeReasoning': 3
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              }
            ]
        }
      ]

    }
  ]
}