from src.services.bacteriaService import BacteriaService
from fastapi import APIRouter
from pydantic import BaseModel
from src.models.bacteria import Bacteria

router = APIRouter()


class Amostra(BaseModel):
    bacteriaA: Bacteria
    bacteriaB: Bacteria
    bacteriaC: Bacteria
    bacteriaD: Bacteria
    bacteriaE: Bacteria
    linhas: int


class BacteriaController():
    @router.post("/pop")
    async def createPopulation(amostra: Amostra):
        service = BacteriaService()
        resultado = []
        return resultado

    @router.post("/pop2")
    async def createPopulation(amostra: Amostra):
        service = BacteriaService()
        resultado = service.ode45(amostra.bacteriaA, amostra.bacteriaB, amostra.bacteriaC,
                                  amostra.bacteriaD, amostra.bacteriaE,
                                  amostra.linhas)
        return resultado
