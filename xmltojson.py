import json
import xmltodict

def convert(xml_file, json_file, xml_attribs=True):
    with open(xml_file, "rb") as infile:
        fullJson = xmltodict.parse(infile, xml_attribs=xml_attribs)
        print d
        with open(json_file, "w") as outfile:
            json.dump(d, outfile)
    return

xml_file = "example.xml"
json_file = "example.json"

convert(xml_file, json_file)