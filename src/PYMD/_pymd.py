from ._converter import Converter
from ._files_manager import FileManager
from chromologger import Logger as Log
from .interface import run
import sys


log:Log = Log('./logs/log_pymd')

filename:str = '../../data/test-docx2.docx'
output:str = '../../converted/'

class Pymd:
    @staticmethod
    def run_app():
        run()