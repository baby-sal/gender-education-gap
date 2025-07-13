import requests 
import configparser
import os


"""
LIST OF INDICATORS AND ENDPOINTS

literacy rate youth female (15-24) SE.ADT.1524.LT.FE.ZS
literacy rate youth male (15-24) SE.ADT.1524.LT.MA.ZS
literacy rate youth (15-24) gender disparity index SE.ADT.1524.LT.FM.ZS

defualt indicator is CPIA gender equality rating (1=low to 6=high) 
"""

class EndpointBuilder:
	#This is just to construct the URL and is independent of API- do not need to use config parser
	def __init__(self, base_url):
		self.base_url = base_url 

	def construct(self, indicator):
		url = f"{self.base_url}{indicator}?format=json"
		return url 

class WorldBankAPI:

	def __init__(self):
		self.config = configparser.ConfigParser()
		#regardless of where this is ran, load the config.ini from the same directory as .py code 
		self.config.read(os.path.dirname(__file__) + "/config.ini") 
		self.base_url = self.config.get("WORLDBANK", "base_url")
		self.default_indicator = self.config.get("WORLDBANK", "default_indicator")
		self.build_endpoint = EndpointBuilder(self.base_url)
	
	def construct_endpoint(self,indicator=None):
		#does not need to be 'self.indicator' as indicator is not created at the instance of the class but is intead an attribute of the class 
		if indicator is None:
			indicator = self.default_indicator
		else:
			indicator = self.config.get("WORLDBANK", indicator)

		endpoint = self.build_endpoint.construct(indicator)
		return endpoint
	
	def get_data(self, indicator):
		endpoint = self.construct_endpoint(indicator)
		try:
			response = requests.get(endpoint)

			if response.status_code == 200:
				posts = response.json()
				return posts
		   
			else:
				print("Error:", response.status_code)
				return None
		   
		except requests.exceptions.RequestException as e:
			print("Error:", e)
			return None 
		

test = WorldBankAPI()
data = test.get_data("lit_youth_gdi_endpoint")

if __name__ == "__main__":
	print(data)
	

