import math
from models.bacteria import Bacteria
from decimal import Decimal

class BacteriaController():
    def __init__(self, popA, popB, popC, popD, popE, ta, tb, tc, td, te, ka, kb, kc, kd, ke, ab, ac, ad, ae, bc, bd, be, cd, ce, de):
        self.a = Bacteria(popA, ta, ka, ab, ac, ad, ae)
        self.b = Bacteria(popB, tb, kb, ab, bc, bd, be)
        self.c = Bacteria(popC, tc, kc, ac, bc, cd, ce)
        self.d = Bacteria(popD, td, kd, ad, bd, cd, de)
        self.e = Bacteria(popE, te, ke, ae, be, ce, de)
        self.results = []

    def calc(self, a, b, c, d, e, h, t):
        # p = a.pop + h * a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k))
        ai = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k))
        bi = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k)) + (h/2) * ai
        ci = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k)) + (h/2) * bi
        di= a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k)) + (h/2) * ci
        p = a.pop + (1/6) * (ai + 2 * bi + 2 * ci + di) * h
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
    
    def simpson(self, lista):
        t = 0
        sp = 0
        somasp = 0
        for i in lista:
            t += i.pop
        for i in lista:
            somasp += (i.pop * (i.pop - 1))
        if(t > 1):
            sp = somasp / (t * (t-1))
        return 1 - sp if sp > 0 else None
        

    def make_table(self, linhas):
        a = self.a
        b = self.b
        c = self.c
        d = self.d
        e = self.e
        h = Decimal('0.0000001')
        si = self.shannon([a, b, c, d, e])
        sp = self.simpson([a, b, c, d, e])
        self.results.append({'t': 0, 'a': f'{a.pop:.2f}', 'b': f'{b.pop:.2f}', 'c': f'{c.pop:.2f}', 'd': f'{d.pop:.2f}', 'e': f'{e.pop:.2f}', 'si': si, 'sp': sp})
        print(h)
        h = float(h)
        x = math.floor(linhas/30)
        for i in range(1, linhas+1):
            cal_a = self.calc(a, b, c, d, e, h, i-1)
            cal_b = self.calc(b, a, c, d, e, h, i-1)
            cal_c = self.calc(c, a, b, d, e, h, i-1)
            cal_d = self.calc(d, a, b, c, e, h, i-1)
            cal_e = self.calc(e, a, b, c, d, h, i-1)
            si = self.shannon([a, b, c, d, e])
            sp = self.simpson([a, b, c, d, e])
            if (i % x == 0):
                self.results.append({'t': i, 'a': f'{cal_a:.2f}', 'b': f'{cal_b:.2f}', 'c': f'{cal_c:.2f}', 'd': f'{cal_d:.2f}', 'e': f'{cal_e:.2f}', 'si': si, 'sp': sp})
            a.pop = cal_a
            b.pop = cal_b
            c.pop = cal_c
            d.pop = cal_d
            e.pop = cal_e



    
