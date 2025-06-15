from .db_manager import db_manage
from chromologger import Logger as Log

log:Log = Log('./logs/log_pymd')

filename:str = '../../data/test-docx2.docx'
output:str = '../../converted/'

class Pymd:
    @staticmethod
    def run_app():
        db_manage.database_config()
        from .interface import run
        run()