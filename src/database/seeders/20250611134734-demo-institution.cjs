"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("institutions", [
      {
        name: "Banco do Brasil",
        normalized_name: "BANCO_DO_BRASIL",
        agency_code: "001",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("institutions", null, {});
  },
};
