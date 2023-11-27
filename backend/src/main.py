from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controllers.bacteriaController import BacteriaController

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "localhost:5173",
    "ocalhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/population")
async def root(popA: int = 0, popB: int = 0, popC: int = 0, popD: int = 0, popE: int = 0, ka: int = 1000, 
               kb: int = 1000, kc: int = 1000, kd: int = 1000, ke: int = 1000, ta: int = 1, tb: int = 1, tc: int = 1, 
               td: int = 1, te: int = 1, ab: int = 1, ac: int = 1, ad: int = 1, ae: int = 1, bc: int = 1, bd: int = 1,
               be: int = 1, cd: int = 1, ce: int = 1, de: int = 1, linhas: int = 200000):
    con = BacteriaController(popA, popB, popC, popD, popE, ta, tb, tc, td, te, ka, kb, kc, kd, ke, ab, ac, ad, ae, bc, bd, be, cd, ce, de)
    con.make_table(linhas)
    return {'lista': con.results}

#http://127.0.0.1:8000/population?popA=3000&popB=3000&popC=3000&popD=3000&popE=3000&ka=10000&kb=10000&kc=10000&kd=10000&ke=10000&ta=6&tb=5&tc=2&td=3&te=2&ab=2&ac=4&ad=3&ae=5&bc=3&bd=5&be=4&cd=3&ce=5&de=3&linhas=200000
