from markitdown import MarkItDown, DocumentConverterResult
from src.PYMD._returning import Returning
from chromologger import Logger as Log
from threading import Thread
import asyncio

log = Log('./logs/log_converter') # Initialize logger

class Converter(MarkItDown):
    def __init__(self,filename:str,ep:bool|None=None,eb:bool|None=None) -> None:
        super().__init__(enable_plugins=ep, enable_builtins=eb)
        self.__fn:str = filename # Path to file + extension
        self.content:str = ''

    def convert_file(self) -> Returning:
        __return:Returning = Returning(False)
        try:
            print('try convert')
            __thread:Thread = Thread(target=lambda: asyncio.run(self.__convert(__return)))
            __thread.start()
            __thread.join()
        except Exception as e:
            log.log_e(e)
        return __return

    async def __convert(self, __return) -> None:
        #self.content = await asyncio.sleep(1, result=self.convert(self.__fn))
        __converted: DocumentConverterResult = await asyncio.sleep(1, result=self.convert(self.__fn))  # Convert file
        if __converted is not None:
            __return.ok = True
            __return.data_str = __converted.text_content
            log.log(f'File "{self.__fn}" converted successfully')
