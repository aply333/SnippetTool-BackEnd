
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Snippet').del()
    .then(function () {
      // Inserts seed entries
      return knex('Snippet').insert([
       {position: 1,
         snippet_title: "Form Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 1,
         code_reference: 1},
       {position: 2,
         snippet_title: "Div Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 2,
         code_reference: 1},  
       {position: 3,
         snippet_title: "Some Other Stuff",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 3,
         line_reference: 3,
         code_reference: 1},
       {position: 1,
         snippet_title: "Form Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 4,
         code_reference: 2},
       {position: 2,
         snippet_title: "Div Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 5,
         code_reference: 2},
       {position: 1,
         snippet_title: "Form Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 3,
         line_reference: 6,
         code_reference: 3},
       {position: 1,
         snippet_title: "Form Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 7,
         code_reference: 4},
       {position: 1,
         snippet_title: "Form Tag",
         snippet_data: "Hey some thing about this tag and any information I want.",
         tag: 1,
         line_reference: 1,
         code_reference: 5},
        ]);
    });
};