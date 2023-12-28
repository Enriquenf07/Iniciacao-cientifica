from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from src.controllers import bacteriaController



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

app.include_router(bacteriaController.router)

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)




#http://127.0.0.1:8000/population?popA=3000&popB=3000&popC=3000&popD=3000&popE=3000&ka=10000&kb=10000&kc=10000&kd=10000&ke=10000&ta=6&tb=5&tc=2&td=3&te=2&ab=2&ac=4&ad=3&ae=5&bc=3&bd=5&be=4&cd=3&ce=5&de=3&linhas=200000
