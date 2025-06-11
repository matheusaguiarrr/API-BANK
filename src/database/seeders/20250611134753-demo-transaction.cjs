"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("transactions", [
      {
        account_id: 1,
        value: 150.5,
        type: "credit",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        account_id: 2,
        value: 200.75,
        type: "debit",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        account_id: 3,
        value: 50.25,
        type: "credit",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        account_id: 4,
        value: 300.0,
        type: "debit",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        account_id: 5,
        value: 100.0,
        type: "credit",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
