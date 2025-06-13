'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João Almeida',
        cpf: '12345678901',
        email: 'conta1@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Maria de Freitas',
        cpf: '12345678902',
        email: 'conta2@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'José Amaral',
        cpf: '12345678903',
        email: 'conta3@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Renan do Carmo',
        cpf: '12345678904',
        email: 'conta4@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Felipe da Guia',
        cpf: '12345678905',
        email: 'conta5@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gabriel Macedo',
        cpf: '12345678906',
        email: 'conta6@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fernanda da Silva',
        cpf: '12345678907',
        email: 'conta7@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rodrigo Caetano',
        cpf: '12345678908',
        email: 'conta8@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Renato Gaúcho',
        cpf: '12345678909',
        email: 'conta8@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mazembe Mundial',
        cpf: '12345678910',
        email: 'conta8@teste.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Andrei Albrecht',
        cpf: '12345678911',
        email: 'andreialbrecht@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alexandre Tonin',
        cpf: '12345678912',
        email: 'xandetonin@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ruan Oliveira',
        cpf: '12345678913',
        email: 'oliveiraruan2018@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Marcos Schlick',
        cpf: '12345678914',
        email: 'marcosschlick@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Matheus Aguiar',
        cpf: '12345678915',
        email: 'matheus.aguiar068@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
