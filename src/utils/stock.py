from stocksymbol import StockSymbol
import json 
import sys
api_key = '44b72cc0-2ddd-445b-b8d4-438170d7e91b'
def get_symbol_list():
    ss = StockSymbol(api_key)
    symbol_list_us = ss.get_symbol_list(market="US",symbols_only=True)
    return symbol_list_us
get_symbol_list()
sys.stdout = open('declare.js','w')
jsonobj = json.dumps(get_symbol_list())
print("var jsonstr='{}'".format(jsonobj))