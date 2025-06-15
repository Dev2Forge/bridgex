from sqlazo import Database
from chromologger import Logger as Log

log = Log('./log.log')

def database_config():
    db = Database('./db_manager/config.db', False)
    # Query to validate that the table exists
    validate_query = db.get_data_where('config_ui', 'id == 1')
    if validate_query is None:
        cols_config: list[str] = ['id INTEGER PRIMARY KEY', 'name TEXT NOT NULL', 'value TEXT NOT NULL']
        db.create_table('config_ui', cols_config)
        db.insert_data(['current_lang_code', 'es_CO'], ['name', 'value'], 'config_ui')
        db.insert_data(['last_directory_open', 'C:/'], ['name', 'value'], 'config_ui')
        db.insert_data(['last_directory_output', 'C:/'], ['name', 'value'], 'config_ui')
