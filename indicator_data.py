import requests 
import configparser


"""
LIST OF INDICATORS AND ENDPOINTS 

literacy rate youth female (15-24) SE.ADT.1524.LT.FE.ZS
literacy rate youth male (15-24) SE.ADT.1524.LT.MA.ZS
literacy rate youth (15-24) gender disparity index SE.ADT.1524.LT.FM.ZS


"""


# def get_data(indicator:str, format_type = "json"): #format_type is a default argument 
#     #base_endpoint = "https://api.worldbank.org/v2/country/all/indicator/" 
#     endpoint = f"{base_endpoint}{indicator}?format={format_type}"

#     response = requests.get(endpoint).json()

#     return response 

# get_data("SE.ADT.1524.LT.FE.ZS")


class WorldBankAPI:

    def __init__(self):
        config = configparser.ConfigParser()
        #regardless of where this is ran, fine file path with congig.ini at the end 
        config.read(os.path.direname(__file__) + "/config.ini") 
    
    def call_indicator(self):
        base_endpoint = "https://api.worldbank.org/v2/country/all/indicator/"
        endpoint = f"{base_endpoint}{self.indicator}?format={self.format_type}"

        response = requests.get(endpoint).json()

        return response
