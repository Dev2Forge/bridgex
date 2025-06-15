from PySide6.QtCore import Qt, QTranslator, QLocale
from PySide6.QtWidgets import QApplication
from .ui_dialog_language import Ui_Lang_Dialog
from PySide6.QtWidgets import QDialog
from sqlazo import Database

db = Database('./database/config.db', False)

class LanguageManager(QDialog):
    def __init__(self, app:QApplication=None):
        # es_CO is default
        self.lang_code: str = db.get_data_where('config_ui', 'name == "current_lang_code"').fetchone()[2]
        self.__dir:str = './interface/translations/locale'
        self.lang_file:str = ''
        self.__translator:QTranslator = QTranslator(app)
        self.__app:QApplication = app
        self.parent = None
        self.__lang_dialog = None

    def set_super_parent(self, parent):
        self.parent = parent
        super().__init__(self.parent)
        self.__lang_dialog = Ui_Lang_Dialog()
        self.__lang_dialog.setupUi(self)

    def show_dialog(self):
        self.exec()
        if self.result() == 1 and self.__lang_dialog.languages.currentItem() is not None:
                self.lang_code:str = self.__lang_dialog.languages.currentItem().toolTip()
                # Pending improvement (when 'update_data' is added to 'sqlazo')
                db.delete_data('config_ui', 'name == "current_lang_code"')
                db.insert_data(['current_lang_code', self.lang_code], ['name', 'value'], 'config_ui')
                self.load_lang()

    def load_lang(self, lang_code:str=None):
        __code = lang_code if lang_code is not None else self.lang_code
        self.lang_file = f'pymd_{__code}.qm'
        if self.__translator.load(self.lang_file, self.__dir):
            self.__app.installTranslator(self.__translator)
