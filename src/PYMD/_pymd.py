from .database import Manager
from chromologger import Logger as Log

# Initial paths to files
log:Log = Log('./logs/log_pymd')
filename:str = '../../data/test-docx2.docx'
output:str = '../../converted/'

class Pymd:
    @staticmethod
    def run_app():
        Manager.database_config()
        from .interface import run
        run()