import requests;

url = "http://localhost:5000/"

result = requests.get(url).json()
print(result)

url1 = "http://localhost:5000/parse_table/"

result1 = requests.post(url1)
print(result1)


# url2 = "http://localhost:5000/create/"

# result2 = requests.get(url2).json()
# print(result2)
