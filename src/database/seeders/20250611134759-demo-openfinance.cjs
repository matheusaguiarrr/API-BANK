"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("openFinance", [
      {
        account_id: 1,
        status: true,
        expiration_date: new Date("2025-12-31"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        account_id: 2,
        status: false,
        expiration_date: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("openFinance", null, {});
  },
};
