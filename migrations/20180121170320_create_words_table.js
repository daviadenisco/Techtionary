module.exports = {
  up (knex, Promise) {
    return knex.schema.createTable('words', (table) => {
      table.increments();
      table.string('word', 100).notNull();
      table.string('definition', 2000).defaultTo('');
      table.timestamps(true, true);
    });
  },
  down (knex, Promise) {
    return knex.schema.dropTable('words');
  }
}
// this is why wireframes are done first and why you need to know what exactly is going to happen in your site with what tables, on what pages, etc.
