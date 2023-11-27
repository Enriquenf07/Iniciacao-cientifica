import math
from models.bacteria import Bacteria

class BacteriaController():
    def __init__(self, popA, popB, popC, popD, popE, ta, tb, tc, td, te, ka, kb, kc, kd, ke, ab, ac, ad, ae, bc, bd, be, cd, ce, de):
        self.a = Bacteria(popA, ta, ka, ab, ac, ad, ae)
        self.b = Bacteria(popB, tb, kb, ab, bc, bd, be)
        self.c = Bacteria(popC, tc, kc, ac, bc, cd, ce)
        self.d = Bacteria(popD, td, kd, ad, bd, cd, de)
        self.e = Bacteria(popE, te, ke, ae, be, ce, de)
        self.results = []

    def calc(self, a, b, c, d, e, h):
        p = a.pop + h * a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k))
        return p

    def shannon(self, lista):
        t = 0
        sh = 0
        for i in lista:
            t += i.pop
        if (t != 0 ):
            for i in lista:
                pi = i.pop / t
                ln = math.log(pi)
                sh += pi * ln
        return -sh
        

    def make_table(self, linhas):
        a = self.a
        b = self.b
        c = self.c
        d = self.d
        e = self.e
        x = math.floor(linhas/30)
        for i in range(1, linhas+1):
            cal_a = self.calc(a, b, c, d, e, 0.0000001)
            cal_b = self.calc(b, a, c, d, e, 0.0000001)
            cal_c = self.calc(c, a, b, d, e, 0.0000001)
            cal_d = self.calc(d, a, b, c, e, 0.0000001)
            cal_e = self.calc(e, a, b, c, d, 0.0000001)
            si = self.shannon([a, b, c, d, e])
            if (i % x == 0):
                self.results.append({'t': i, 'a': f'{cal_a:.2f}', 'b': f'{cal_b:.2f}', 'c': f'{cal_c:.2f}', 'd': f'{cal_d:.2f}', 'e': f'{cal_e:.2f}', 'si': si})
            a.pop = cal_a
            b.pop = cal_b
            c.pop = cal_c
            d.pop = cal_d
            e.pop = cal_e



    
