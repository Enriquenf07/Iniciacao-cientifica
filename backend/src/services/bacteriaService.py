import math

import numpy as np
import scipy
from models.bacteria import Bacteria
from decimal import Decimal


class BacteriaService():

    def calc(self, a, b, c, d, e, h, t):
        # p = a.pop + h * a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop )/ a.k))
        ai = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop) / a.k))
        bi = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop) / a.k)) + (
                    h / 2) * ai
        ci = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop) / a.k)) + (
                    h / 2) * bi
        di = a.r * a.pop * (1 - ((a.pop + a.ab * b.pop + a.ac * c.pop + a.ad * d.pop + a.ae * e.pop) / a.k)) + (
                    h / 2) * ci
        p = a.pop + (1 / 6) * (ai + 2 * bi + 2 * ci + di) * h
        return p

#ERRO ln
    def shannon(self, lista):
        t = 0
        sh = 0
        for i in lista:
            t += i
        if (t != 0):
            for i in lista:
                pi = i / t
                if (pi>0):
                    ln = math.log(pi)
                else:
                    ln = 0
                sh += pi * ln
        return -sh

    def simpson(self, lista):
        t = 0
        sp = 0
        somasp = 0
        for i in lista:
            t += i
        for i in lista:
            somasp += (i * (i - 1))
        if (t > 1):
            sp = somasp / (t * (t - 1))
        return 1 - sp if sp > 0 else 1

    # def make_table(self, a, b, c, d, e, linhas):
    #     h = Decimal('0.00001')
    #     results = []
    #     si = self.shannon([a, b, c, d, e])
    #     sp = self.simpson([a, b, c, d, e])
    #     results.append({'t': 0, 'a': f'{a.pop:.2f}', 'b': f'{b.pop:.2f}', 'c': f'{c.pop:.2f}', 'd': f'{d.pop:.2f}',
    #                     'e': f'{e.pop:.2f}', 'si': si, 'sp': sp})
    #     h = float(h)
    #     x = math.floor(linhas / 100)
    #     for i in range(1, linhas + 1):
    #         cal_a = self.calc(a, b, c, d, e, h, i - 1)
    #         cal_b = self.calc(b, a, c, d, e, h, i - 1)
    #         cal_c = self.calc(c, a, b, d, e, h, i - 1)
    #         cal_d = self.calc(d, a, b, c, e, h, i - 1)
    #         cal_e = self.calc(e, a, b, c, d, h, i - 1)
    #         si = self.shannon([a, b, c, d, e])
    #         sp = self.simpson([a, b, c, d, e])
    #         if i % x == 0:
    #             results.append(
    #                 {'t': i, 'a': f'{cal_a:.2f}', 'b': f'{cal_b:.2f}', 'c': f'{cal_c:.2f}', 'd': f'{cal_d:.2f}',
    #                  'e': f'{cal_e:.2f}', 'si': si, 'sp': sp})
    #         a.pop = cal_a
    #         b.pop = cal_b
    #         c.pop = cal_c
    #         d.pop = cal_d
    #         e.pop = cal_e
    #     return results

    def ode45(self, a, b, c, d, e, linhas):
        def LVC(N, t, r1, r2, r3, r4, r5, A, B, C, D, E, K1, K2, K3, K4, K5):
            dN_1 = r1 * N[0] * (1 - (N[0] + A[0] * N[1] + A[1] * N[2] + A[2] * N[3] + A[3] * N[4]) / K1)
            dN_2 = r1 * N[1] * (1 - (N[1] + B[0] * N[0] + B[1] * N[2] + B[2] * N[3] + B[3] * N[4]) / K2)
            dN_3 = r1 * N[2] * (1 - (N[2] + C[0] * N[0] + C[1] * N[1] + C[2] * N[3] + C[3] * N[4]) / K3)
            dN_4 = r1 * N[3] * (1 - (N[3] + D[0] * N[0] + D[1] * N[1] + D[2] * N[2] + D[3] * N[4]) / K4)
            dN_5 = r1 * N[4] * (1 - (N[4] + E[0] * N[0] + E[1] * N[1] + E[2] * N[2] + E[3] * N[3]) / K5)
            return np.array([dN_1, dN_2, dN_3, dN_4, dN_5])

        NI = np.array([a.pop, b.pop, c.pop, d.pop, e.pop])
        A = np.array([a.ab, a.ac, a.ad, a.ae])
        B = np.array([b.ab, b.ac, b.ad, b.ae])
        C = np.array([c.ab, c.ac, c.ad, c.ae])
        D = np.array([d.ab, d.ac, d.ad, d.ae])
        E = np.array([e.ab, e.ac, e.ad, e.ae])

        # Time vector
        t = np.linspace(0, linhas, 1000)
        sol = scipy.integrate.odeint(LVC, NI, t, args=(a.r, b.r, c.r, d.r, e.r, A, B, C, D, E, a.k, b.k, c.k, d.k, e.k))
        results = []
        si = self.shannon([NI[0], NI[1], NI[2], NI[3], NI[4]])
        sp = self.simpson([NI[0], NI[1], NI[2], NI[3], NI[4]])
        results.append({'t': 0, 'a': f'{NI[0]:.2f}', 'b': f'{NI[1]:.2f}', 'c': f'{NI[2]:.2f}', 'd': f'{NI[3]:.2f}',
                                'e': f'{NI[4]:.2f}', 'si': f'{si:.2f}', 'sp': f"{sp:.2f}"})
        count = 0
        for i in sol:
            count += 1
            if count % 10 == 0:
                si = self.shannon([i[0], i[1], i[2], i[3], i[4]])
                sp = self.simpson([i[0], i[1], i[2], i[3], i[4]])
                results.append({'t': 0, 'a': f'{i[0]:.2f}', 'b': f'{i[1]:.2f}', 'c': f'{i[2]:.2f}', 'd': f'{i[3]:.2f}',
                                'e': f'{i[4]:.2f}', 'si': f'{si:.2f}', 'sp': f'{sp:.2f}'})
        return results

