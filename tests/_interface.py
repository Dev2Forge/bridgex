# This Python file uses the following encoding: utf-8
import sys
import time

from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QApplication, QMainWindow, QFileDialog, QMessageBox

# Important:
# You need to run the following command to generate the ui_form.py file
#     pyside6-uic form.ui -o ui_form.py, or
#     pyside2-uic form.ui -o ui_form.py
from ui_form import Ui_MainWindow

class MainWindow(QMainWindow):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.__icon_window:QIcon = QIcon('./icon.png')
        self.setWindowIcon(self.__icon_window)
        self.ui.actionExit.triggered.connect(self.__close)
        self.ui.explorer_btn.clicked.connect(self.__explorer)

    def __explorer(self):
        file:tuple[str, str] = QFileDialog.getOpenFileName(self, 'Open file', 'C:/', '')
        print(file)

    def __close(self):
        __msg_close:QMessageBox = QMessageBox()
        __msg_close.setWindowIcon(self.__icon_window)
        __msg_close.setWindowTitle("Close Program")
        __msg_close.setText('Do you want to close this program?')
        __msg_close.setStandardButtons(__msg_close.StandardButton.Ok | __msg_close.StandardButton.Cancel)
        __msg_close.exec()
        if __msg_close.result() == 1024: self.close()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    widget = MainWindow()
    widget.show()
    sys.exit(app.exec())
