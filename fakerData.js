// init faker database
const faker = require('faker')

exports.faker = {
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  gender: faker.name.gender(),
  phone: faker.phone.phoneNumber(),
  city: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  zipCode: faker.address.zipCode(),
  createdAt: faker.date.recent()
}
