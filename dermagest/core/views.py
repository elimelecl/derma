from django.shortcuts import render

# Create your views here.

def home(requets):
    return render(requets, 'core/home.html')

def pacientes(requets):
    return render(requets, 'core/pacientes.html')

def productos(requets):
    return render(requets, 'core/productos.html')

def procedimientos(requets):
    return render(requets, 'core/procedimientos.html')

def facturacion(requets):
    return render(requets, 'core/facturacion.html')

def reportes(requets):
    return render(requets, 'core/reportes.html')

def configuracion(requets):
    return render(requets, 'core/configuracion.html')
