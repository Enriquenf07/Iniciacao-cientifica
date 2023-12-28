from pydantic import BaseModel


class Bacteria(BaseModel):
    pop: float
    r: float
    k: float
    ab: float
    ac: float
    ad: float
    ae: float
