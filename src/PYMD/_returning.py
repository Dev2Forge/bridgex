class Returning:
    """To standardize function returns, you can add information in text format (String) or a dictionary (dict)"""
    def __init__(self, ok:bool = True, data_str:str | None = None, data_dict:str | None = None):
        """Class constructor

        :param ok: Successful operation
        :param data_str: String information
        :param data_dict: Dictionary information
        """
        self.ok = ok # Status (operation)
        self.data_str = data_str # String information
        self.data_dict = data_dict # Dictionary information