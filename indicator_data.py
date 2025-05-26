import requests 

base_endpoint = "https://api.worldbank.org/v2/country/all/indicator/"

"""
LIST OF INDICATORS AND ENDPOINTS 

literacy rate youth female (15-24) SE.ADT.1524.LT.FE.ZS
literacy rate youth male (15-24) SE.ADT.1524.LT.MA.ZS
literacy rate youth (15-24) gender disparity index SE.ADT.1524.LT.FM.ZS


"""


def get_data(indicator:str, format_type = "json"): #format_type is a default argument 
    #base_endpoint = "https://api.worldbank.org/v2/country/all/indicator/" 
    endpoint = f"{base_endpoint}{indicator}?format={format_type}"

    response = requests.get(endpoint).json()

    if response.status_code == 200:
        print("success")
    else:
        print(f"fail: error code {response.status_code}")



