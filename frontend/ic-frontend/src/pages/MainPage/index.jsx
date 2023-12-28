import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import Button from '@mui/material/Button';
import Form from "./components/Form";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress';
import useStore from "../../store/UseStore";
import axios from "axios";


const createAmostra = async (data) => {
    const response = await axios.post('http://127.0.0.1:8000/pop2', data);
    return response.data;
};

export default function Main() {
    const queryClient = useQueryClient();
    const [datas, setDatas] = useState()
    const [enabled, setEnabled] = useState(false)

    const [popA, taxaA, kA, popB, taxaB, kB, popC, taxaC, kC, popD, taxaD, kD, popE, taxaE, kE, ab, ac, ad, ae, ba, bc, bd, be, ca, cb, cd, ce, da, db, dc, de, ea, eb, ec, ed, linhas] = useStore(state => [
        state.popA,
        state.taxaA,
        state.kA,
        state.popB,
        state.taxaB,
        state.kB,
        state.popC,
        state.taxaC,
        state.kC,
        state.popD,
        state.taxaD,
        state.kD,
        state.popE,
        state.taxaE,
        state.kE,
        state.ab,
        state.ac,
        state.ad,
        state.ae,
        state.ba,
        state.bc,
        state.bd,
        state.be,
        state.ca,
        state.cb,
        state.cd,
        state.ce,
        state.da,
        state.db,
        state.dc,
        state.de,
        state.ea,
        state.eb,
        state.ec,
        state.ed,
        state.linhas])

    const form = () => {
        return {
            "bacteriaA": {
                "pop": popA,
                "r": taxaA,
                "k": kA,
                "ab": ab,
                "ac": ac,
                "ad": ad,
                "ae": ae
            },
            "bacteriaB": {
                "pop": popB,
                "r": taxaB,
                "k": kB,
                "ab": ba,
                "ac": bc,
                "ad": bd,
                "ae": be
            },
            "bacteriaC": {
                "pop": popC,
                "r": taxaC,
                "k": kC,
                "ab": ca,
                "ac": cb,
                "ad": cd,
                "ae": ce
            },
            "bacteriaD": {
                "pop": popD,
                "r": taxaD,
                "k": kD,
                "ab": da,
                "ac": db,
                "ad": dc,
                "ae": de
            },
            "bacteriaE": {
                "pop": popE,
                "r": taxaE,
                "k": kE,
                "ab": ea,
                "ac": eb,
                "ad": ec,
                "ae": ed
            },
            "linhas": linhas
        }
    }



    const { mutate, isPending, isError, data, error, reset } = useMutation({
        mutationFn: createAmostra,
        onSuccess: (data, variables, context) => {
            if (data) {
                console.log(1)
                setDatas(data)
            }
        },
    })

    function handleStart() {
        const fm = form()
        console.log(form())
        mutate(form())
    }

    if (isPending) return (
        <div className="flex flex-col ">
            <div className="p-5 flex flex-col gap-10 pb-10 bg-amber-50 border border-b-1 border-zinc-500 ">
                <h1>Bem vindo</h1>
                <Form handleStart={handleStart}></Form>
            </div>
            <div className=' w-[100vw] h-[20rem] flex justify-center items-center'>
                <CircularProgress />
            </div>
        </div>

    );

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="flex flex-col ">
            <div className="p-5 flex flex-col gap-10 pb-10 bg-amber-50 border border-b-1 border-zinc-500 ">
                <h1>Bem vindo</h1>
                <Form handleStart={handleStart}></Form>
            </div>
            {data != null ? <Chart data={datas} /> : <Chart data={{}} />}
        </div>
    )
}

