import faker from 'faker';

module.exports = {
  teachers: [
    {
      email: 'MrsFrizzle@gmail.com',
      qualities: ['qualatativeReasoning', 'quantatativeResoning'],
      classes: [
          { 
            className: 'magic school bus ride!',
            students: [
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 3
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 5,
                  'quantativeReasoning': 5
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 2,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
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
      email: 'teacher1@gmail.com',
      qualities: ['EQ'],
      classes: [
        { 
            className: 'hrsf110',
            students: [
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'EQ' : 0
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'EQ' : 1
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'EQ' : 2
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'EQ' : 3
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 3
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'qualatativeReasoning': 1,
                  'quantativeReasoning': 1
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 3
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 2
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ':0
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 5
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 3
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 2
                }
              },
              {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                qualities: {
                  'EQ': 4
                }
              }
            ]
        }
      ]

    },
    {
      email: 'teacher2@gmail.com',
      qualities: ['age'],
      classes: [
        { 
            className: 'hrsf111',
            students: [
              {
                firstName: 'Delos Montgomery',
                lastName: 'Elder III',
                qualities: {
                  'age': 1
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'age': 3
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'age': 5
                }
              },
              {
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                qualities: {
                  'age': 4
                }
              }
            ]
        }
      ]

    }
  ]
}