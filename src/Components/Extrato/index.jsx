import React from "react";
import { Box, Botao  } from "../../Components/UI";
import { extratoLista } from "../../info";
import List from "../Items";


const Extrato = () => { 
    return (
    <Box>
        {extratoLista.updates.map(({ id, type, from, value, date}) => {
            return (
                <List key={id} type={type} from={from} value={value} date={date} />
            );
        })}
        <Botao>Ver Mais</Botao>
    </Box>
   );
};
export default Extrato;
