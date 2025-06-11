"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        name: "João Almeida",
        cpf: "12345678901",
        email: "conta1@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "José Amaral",
        cpf: "12345678903",
        email: "conta3@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Renan do Carmo",
        cpf: "12345678904",
        email: "conta4@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Felipe da Guia",
        cpf: "12345678905",
        email: "conta5@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabriel Macedo",
        cpf: "12345678906",
        email: "conta6@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Fernanda da Silva",
        cpf: "12345678907",
        email: "conta7@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Rodrigo Caetano",
        cpf: "12345678908",
        email: "conta8@teste.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
