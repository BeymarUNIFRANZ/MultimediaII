from vpython import *
import asyncio
import random

scene = canvas(title="Cilindros y Conos en VPython", width=800, height=600)

cilindro = cylinder(pos=vector(-5, -5, -5), axis=vector(0, 1, 0), radius=0.5, color=color.blue)
cono = cone(pos=vector(-5, -5, -5), axis=vector(0, 1, 0), radius=0.8, color=color.orange)


pos_inicial_cilindro = vector(-5, -5, -5)
pos_inicial_cono = vector(-5, -5, -5)

def color_aleatorio():
    return vector(random.random(), random.random(), random.random())

async def mover_objeto(objeto):
    while True:
        objeto.pos += vector(0.2, 0.05, 0)  
        if objeto.pos.x > 5:
            objeto.pos = vector(-5, -5, -5)
        await asyncio.sleep(0.1)


def manejar_tecla(evt):
    tecla = evt.key
    if tecla == 'r':
        cilindro.pos = pos_inicial_cilindro
        cono.pos = pos_inicial_cono
    elif tecla == 'e':
        cilindro.color = color_aleatorio()
        cono.color = color_aleatorio()

scene.bind("keydown", manejar_tecla)

async def main():
    task1 = asyncio.create_task(mover_objeto(cilindro))
    task2 = asyncio.create_task(mover_objeto(cono))
    await asyncio.gather(task1, task2)

asyncio.run(main())
