let fs = require("fs");
require("dotenv").config();
const Database = require("./database/database");
const db = new Database();

// get the params from the cmd line
var args = process.argv.slice(2);

// if the args are empty, then exit
if (args.length === 0) {
  console.log("No arguments passed");
  process.exit(1);
}

let main_arg = args.shift();

if (main_arg === "migration") {

  // get the type of migration
  let migration_type = args.shift();

  if (migration_type === undefined) {
    console.log("No migration type provided");
    process.exit(1);
  }

  if (migration_type === "make") {
    create_migration(args);
  } else if (migration_type === "run") {
    run_migration(args);
  } else {
    console.log("Invalid migration type");
    process.exit(1);
  }

  function create_migration(args) {
    // the second argument is the name of the migration & is required
    let migration_name = args.shift();

    if (migration_name === undefined) {
      console.log("No migration name provided");
      process.exit(1);
    }

    // check if the migration name is valid
    if (!migration_name.match(/^[a-z0-9_]+$/)) {
      console.log("Invalid migration name");
      process.exit(1);
    }

    // add the timestamp in the start to order the migrations
    let timestamp = new Date().getTime();

    // create the migration file
    let migration_file = `./migrations/${timestamp}_${migration_name}.sql`;

    // write the migration file
    fs.writeFile(migration_file, "", function (err) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });

    console.log("Migration created successfully");
  }

  function run_migration(args) {

    // the second argument is the name of the migration & is required
    let migration_name = args.shift();

    if (migration_name === undefined) {
      console.log("No migration name provided");
      process.exit(1);
    }

    // check if the migration name is valid
    if (!migration_name.match(/^[a-z0-9_]+$/)) {
      console.log("Invalid migration name");
      process.exit(1);
    }

    // get the migration file
    let migration_file = `./database/migrations/${migration_name}.sql`;

    // check if the migration file exists
    if (!fs.existsSync(migration_file)) {
      console.log("Migration file does not exist");
      process.exit(1);
    }

    // read the migration file
    let migration_sql = fs.readFileSync(migration_file, "utf8");
    // remove all comments from the migration (/* */, --, lines who start with #)
    migration_sql = migration_sql.replace(/\/\*[\s\S]*?\*\/|--.*|^\s*#.*$/gm, "");
    // clean the migration file to be executed
    migration_sql = migration_sql.replace(/(\r\n|\n|\r)/gm, " ");

    // run the migration
    db.migrate(migration_sql,migration_file)
      .then((res) => {
        console.log("Migration ran successfully",migration_sql,res);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });

  }

}
