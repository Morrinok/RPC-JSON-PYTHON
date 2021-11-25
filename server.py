from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer
import json

def confirmar(*args):

    for arg in args:
        try:

            obj = json.loads(arg)
            json_formatted_str = json.dumps(obj, indent=4)
            print(json_formatted_str)

            return True
        except TypeError:
            lenval = None

def main():
	server = SimpleJSONRPCServer(('localhost', 1006))
	server.register_function(confirmar)
	print("Started server")
	server.serve_forever()

if __name__ == '__main__':
    main()
