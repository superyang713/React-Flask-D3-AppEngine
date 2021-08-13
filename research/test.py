from google.auth.transport.requests import Request
from google.oauth2 import id_token
import requests

{
  "aud": "795435080125-qsnp58ggmqcnh433upachb84a3sdnbkn.apps.googleusercontent.com",
  "azp": "yang-497@mightyhive-data-science-poc.iam.gserviceaccount.com",
  "email": "yang-497@mightyhive-data-science-poc.iam.gserviceaccount.com",
  "email_verified": true,
  "exp": 1628726111,
  "iat": 1628722511,
  "iss": "https://accounts.google.com",
  "sub": "115928937801124989828"
}

client_id = "795435080125-qsnp58ggmqcnh433upachb84a3sdnbkn.apps.googleusercontent.com"
open_id_connect_token = id_token.fetch_id_token(Request(), client_id)
print(open_id_connect_token)
