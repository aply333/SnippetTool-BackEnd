
exports.up = function(knex) {
    return knex.schema
        .createTable('Users', table =>{
            table.increments("user_id");
            table.text("user_email")
                .unique()
                .notNullable()
            table.text("username", 26)
        })
        .createTable('Projects', table=>{
            table.increments("project_id")
            table.text("project_title", 128)
            table.date("date_project_created")
            table.date("date_project_changed")
            table.integer("user")
                .notNullable()
            table.foreign("user")
                .references("user_id")
                .inTable('Users')
        })
        .createTable('Code', table =>{
            table.increments("code_id")
            table.text("code_title", 128)
            table.date("date_code_created")
            table.date("date_code_changed")
            table.integer("project")
            table.foreign("project")
                .references("project_id")
                .inTable("Projects")
        })
        .createTable('Tag', table =>{
            table.increments("tag_id")
            table.text('tag_text', 16)
            table.text('color', 9)
                .notNullable()
        })
        .createTable('Lines', table=>{
            table.increments("line_id")
            table.integer("line_position")
            table.integer("tag")
            table.foreign("tag")
                .references("tag_id")
                .inTable('Tag')
            table.integer('code')
            table.foreign('code')
                .references("code_id")
                .inTable("Code")
            table.date("line_date_created")
            table.date("line_date_changed")
            table.text("line_data", 512)
        })
        .createTable('Snippet', table=>{
            table.increments("snippet_id")
            table.integer("position")
            table.text("snippet_title")
            table.text("snippet_data")
            table.integer("tag")
            table.foreign("tag")
                .references("tag_id")
                .inTable("Tag")
            table.integer("line_reference")
            table.foreign("line_reference")
                .references("line_id")
                .inTable("Lines")
            table.integer('code_reference')
                .references("code_id")
                .inTable("Code")
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Snippet')
    .dropTableIfExists('Lines')
    .dropTableIfExists('Tag')
    .dropTableIfExists('Code')
    .dropTableIfExists('Projects')
    .dropTableIfExists('Users')
};
