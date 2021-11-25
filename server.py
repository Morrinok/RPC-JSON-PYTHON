from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer
import json

def confirmar(*args):

	for arg in args:
		try:

			obj = json.loads(arg)
			#Convertir Diccionario a una lista
			nombre = obj["nombre"]
			direccion = obj["direccion"]
			pedidos = obj["carrito"]
			print("=======================================================================================================")
			print("Nuevo Pedido Recibido!")
			print("\nNombre Cliente: " + nombre)
			print("Direccion Cliente: " + direccion)
			print("\nPedidos:")
			for i in pedidos:
				sandwich = i["title"]
				precio =  i["precio"]
				cantidad = i["cantidad"]
				print("\n|Sandwich -> " + str(sandwich) + " | Precio -> " + str(precio)+ " | Cantidad -> " + str(cantidad) + " |")
			print("=======================================================================================================")
			# Pretty Print JSON
			#json_formatted_str = json.dumps(obj, indent=4)
			#print(json_formatted_str)

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
