import requests 
import configparser
import os


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

# MAYBE have class for URL builder and one for API interaction? To follow abstractionb principle  

class APIBuilder:
    #This is just to construct the URL and is independent of API- do not need to use config parser
    def __init__(self, base_url):
        self.base_url = base_url 

    def construct(self, indicator):
        url = f"{self.base_url}{indicator}?format=json"
        return url 

class WorldBankAPI:

    def __init__(self):
        config = configparser.ConfigParser()
        #regardless of where this is ran, find file path with congig.ini at the end 
        config.read(os.path.dirname(__file__) + "/config.ini") 
        self.base_url = config.get("WORLDBANK", "base_url")
        self.build_endpoint = APIBuilder(self.base_url)
    
    def construct_endpoint(self,indicator):
        endpoint = self.build_endpoint.construct(indicator)
        return endpoint
    
    def get_data(self, inidcator):
        response = self.construct_endpoint
