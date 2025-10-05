import connection from "@/database/connection";
import { freelanceTableProps } from "@/types/freelanceAppTypes";
import { NextApiRequest, NextApiResponse } from "next";

const handlerGetData = async (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    if (request.method !== 'GET') {
        response.status(405).json({
            message: "Metodo non valido"
        })
    }
    try {
        if (request.method === 'GET') {
            const [rows] = await connection.query("SELECT * FROM FreelanceTable");
            const typeRows = rows as freelanceTableProps[];
            response.status(200).json(typeRows);
        }
    } catch (error) {
        console.error("Dati non recuperabili");
        response.status(500).json({
            message: "Dati non recuperabili"
        });
    }
};



export default handlerGetData