"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("accounts", [
      {
        user_id: 1,
        institution_id: 1,
        agency: "1743",
        account: "00458231",
        balance: 1500.75,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        institution_id: 1,
        agency: "4829",
        account: "83274910",
        balance: 3200.5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        institution_id: 1,
        agency: "7854",
        account: "18726394",
        balance: 875.25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        institution_id: 1,
        agency: "9247",
        account: "83746201",
        balance: 4200.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        institution_id: 1,
        agency: "5984",
        account: "52389364",
        balance: 150.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        institution_id: 1,
        agency: "8861",
        account: "66987415",
        balance: 150.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 7,
        institution_id: 1,
        agency: "1900",
        account: "98466513",
        balance: 150.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("accounts", null, {});
  },
};
