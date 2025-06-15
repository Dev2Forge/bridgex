import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QFileDialog, QLabel, QMessageBox
from PySide6.QtGui import QIcon, QCloseEvent
from PySide6.QtCore import Qt, QLocale, QSize
from ._lang import LanguageManager
from ._initialHelp import InitialHelp
from ._osl import OSL
from ._about import About
from src.PYMD import FileManager, Converter
from .ui_main_window import Ui_MainWindow
from chromologger import Logger as Log
from sqlazo import Database
from pathlib import Path
from . import resources_rc

# Feature: Change focus order (the exit dialog focus is "ok", should be "cancel")

db = Database('./database/config.db', False)
log:Log = Log('./logs/log_interface')

app = QApplication(sys.argv)
lang_manager:LanguageManager = LanguageManager(app)
lang_manager.load_lang()
# Feature: Allow change style
app.setStyle("windows11")

class MainWindow(QMainWindow):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.__closed_ui:bool = False
        self.current_lang = lang_manager.lang_code
        lang_manager.set_super_parent(self)
        self.ui: Ui_MainWindow = Ui_MainWindow()
        self.ui.setupUi(self)
        self.__listeners()
        # Hide views temporally (to Show initial help)
        self.ui.frame_views.hide()
        self.__init_help: InitialHelp = InitialHelp(self, app)
        self.__icon_window = QIcon()
        self.__icon_window.addFile(u":/img/logo-pymd-2", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.__file_dialog:QFileDialog = QFileDialog()
        self.__filename:Path = Path('')
        self.__dir_output:str = ''

    @property
    def get_app(self) -> QApplication: return app

    def closeEvent(self, event: QCloseEvent) -> None:
        if not self.__closed_ui: self.__exit(event)

    def __listeners(self):
        """Catch events and set an action"""
        self.ui.explorer_btn.clicked.connect(self.__open_file)
        self.ui.language_btn.clicked.connect(self.__language)
        self.ui.action_open_file.triggered.connect(self.__open_file)
        self.ui.action_exit.triggered.connect(self.__exit)
        self.ui.action_about.triggered.connect(self.__about)
        self.ui.action_language.triggered.connect(self.__language)
        self.ui.action_theme.triggered.connect(self.__theme)
        self.ui.action_OSL.triggered.connect(self.__osl)
        self.ui.convert_btn.clicked.connect(self.__convert)
        self.ui.text_file_selected.textChanged.connect(self.__update)

    def __open_file(self):
        __msg:str = self.tr('Select a file')
        __last_dir:str = db.get_data_where('config_ui', 'name == "last_directory_open"').fetchone()[2]
        __file: tuple[str, str] = self.__file_dialog.getOpenFileName(self, self.tr("Open File"), __last_dir, f"{__msg} ({self.__extensions})")
        if __file[0].strip() != '':
            self.__filename = Path(__file[0])
            db.delete_data('config_ui', 'name == "last_directory_open"')
            # Save last directory
            print(self.__filename.absolute().parent.__str__())
            db.insert_data(['last_directory_open', self.__filename.absolute().parent.__str__()], ['name', 'value'], 'config_ui')
            # Feature: Show progress bar
            # => Can be a Label image (hide initialHelp if all ok, continue else show initialHelp again)
            __converter:Converter = Converter(self.__filename.absolute().__str__())
            __content:str | None = __converter.convert_file().data_str
            if __content is not None:
                self.__init_help.hide()
                self.ui.frame_views.show()
                self.ui.text_file_selected.setPlainText(__content)
            else:
                # Missing: Feature: Close progress bar
                #self.__progress_bar().close()
                self.__box_dialog(self.tr("Warning"), self.tr('The file does not contain plain text (make sure the file content is not just images)')).exec()

    def __update(self):
        # Update real-time MarkDown preview
        self.ui.text_preview_mode.setMarkdown(self.ui.text_file_selected.toPlainText())

    def __convert(self):
        # Feature: New dialog to rename the file (file to save as .md)
        __last_dir:str = db.get_data_where('config_ui', 'name == "last_directory_output"').fetchone()[2]
        self.__dir_output:str = self.__file_dialog.getExistingDirectory(self, self.tr("Select a directory"), "C:/")
        print('DIR-OUTPUT => ', self.__dir_output)
        try:
            if self.__dir_output.strip() != '':
                db.delete_data('config_ui', 'name == "last_directory_output"')
                db.insert_data(['last_directory_output', self.__dir_output], ['name', 'value'], 'config_ui')
                __file_manager:FileManager = FileManager(self.__filename.absolute().__str__(), self.__dir_output)
                if self.ui.text_file_selected.toPlainText().strip() == '':
                    self.__box_dialog(self.tr('Warning'), self.tr('The file is empty'), {'ok': self.tr('Accept')}).exec()
                else:
                    __file_manager.save_md(self.ui.text_file_selected.toPlainText())
        except Exception as e:
            log.log_e(e)

    @property
    def __extensions(self) -> str:
        __allow_extensions:str = ''
        for ex in FileManager.extensions(): __allow_extensions += f'*{ex} '
        return __allow_extensions.strip()

    def __exit(self, event_target: QCloseEvent | None = None):
        __result:int = self.__box_dialog(self.tr('Close Program'),self.tr('Do you want to close this program?'),{'ok': self.tr('Accept')}).exec()
        print(__result)
        if __result == 1024:
            self.__closed_ui = True
            self.close()
        else:
            if type(event_target) is QCloseEvent: event_target.ignore()

    def __about(self):
        About(self, self.current_lang)

    def __language(self):
        """Change UI language"""
        __result: int = 0
        if self.ui.text_preview_mode.isVisible():
            __result = self.__box_dialog(self.tr('Warning'),self.tr('Extracted content will be deleted once you change the language (unless you have already saved it)'),{'ok': self.tr('Accept')}).exec()
        if not self.ui.text_preview_mode.isVisible() or __result == 1024:
            #Feature: Save content in a temporal file (The content is removed when language change)
            lang_manager.show_dialog()
            #Update UI language
            self.ui.retranslateUi(self)
            self.current_lang = lang_manager.lang_code
            if self.__init_help.info.isVisible(): self.__init_help.load_info(self.current_lang)

    def __box_dialog(self, title:str = '', text:str = '', buttons_cancel_ok:dict | None = None, icon:QIcon | None = None) -> QMessageBox:
        """Create a box dialog"""
        __icon: QIcon = icon if icon is not None else self.__icon_window
        __dialog: QMessageBox = QMessageBox()
        # Standard dialog buttons
        __dialog.setStandardButtons(__dialog.StandardButton.Ok | __dialog.StandardButton.Cancel)
        __buttons_txt:list[str] = ['Ok', 'Cancel']
        __dialog.setWindowIcon(__icon)
        __dialog.setWindowTitle(title)
        __dialog.setText(text)
        if buttons_cancel_ok is not None and type(buttons_cancel_ok) is dict:
            if 'ok' in buttons_cancel_ok: __buttons_txt[0] = buttons_cancel_ok['ok']
            if 'cancel' in buttons_cancel_ok: __buttons_txt[1] = buttons_cancel_ok['cancel']
        __dialog.button(__dialog.StandardButton.Ok).setText(__buttons_txt[0])
        __dialog.button(__dialog.StandardButton.Cancel).setText(__buttons_txt[1])
        return __dialog


    def __theme(self):
        # Coming Soon
        # Feature: Change theme
        pass

    def __osl(self):
        OSL(self, lang_manager)

def run():
    widget = MainWindow()
    widget.show()
    sys.exit(app.exec())