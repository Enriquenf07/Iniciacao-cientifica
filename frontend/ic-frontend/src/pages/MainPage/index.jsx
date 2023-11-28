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

export default function Main() {
    const queryClient = useQueryClient()

    const [enabled, setEnabled] = useState(false)

    const [popA, taxaA, kA, popB, taxaB, kB, popC, taxaC, kC, popD, taxaD, kD, popE, taxaE, kE, ab, ac, ad, ae, bc, bd, be, cd, ce, de, linhas] = useStore(state => [
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
    state.bc,
    state.bd,
    state.be,
    state.cd,
    state.ce,
    state.de,
    state.linhas])

    const [url, setUrl] = useState('http://127.0.0.1:8000/population')
    // Queries
    const { isLoading, isError, data, error, refetch, isFetching} = useQuery({ queryKey: ['bacterias'],queryFn: async () => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
    }, enabled: false, refetchOnWindowFocus: false})
    
    function handleStart(){
        setUrl('http://127.0.0.1:8000/population?popA=' + popA + '&popB=' + popB + '&popC=' + popC + '&popD='+popD+'&popE='+popE+'&ka='+kA+'&kb='+kB+'&kc='+kC+'&kd='+kD+'&ke='+kE+'&ta='+taxaA+'&tb='+taxaB+'&tc='+taxaC+'&td='+taxaD+'&te='+taxaE+'&ab='+ab+'&ac='+ac+'&ad='+ad+'&ae='+ae+'&bc='+bc+'&bd='+bd+'&be='+be+'&cd='+cd+'&ce='+ce+'&de='+de+'&linhas=' + linhas)
    }

    useEffect(() => {
        refetch()
    }, [url])

    if (isLoading || isFetching) return(
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

    return(
        <div className="flex flex-col ">
            <div className="p-5 flex flex-col gap-10 pb-10 bg-amber-50 border border-b-1 border-zinc-500 ">
                <h1>Bem vindo</h1> 
                <Form handleStart={handleStart}></Form>
            </div>
            {data != null ? <Chart data={data}/> : <Chart data={() => {{lista: []}}}/>}
        </div>       
    )
}

