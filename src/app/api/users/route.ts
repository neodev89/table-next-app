import connection from "@/database/connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handlerUsers(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            try {
                const [rows] = await connection.query("SELECT * FROM FreelanceTable");
                res.status(200).json(rows);
            } catch {
                res.status(500).json({ error: "errore nel recupero dei freelance" });
            }
            break;

        case "POST":
            try {
                const { name, email, profession } = req.body;

                if (!name || !email || !profession) {
                    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
                }

                const query = `INSERT INTO FreelanceTable (name, email, profession) VALUES (?, ?, ?)`;
                const values = [name, email, profession];

                const [result] = await connection.query(query, values);

                res.status(201).json({
                    message: "Freelance aggiunto con successo",
                    // id: result.insertId,
                });
            } catch (error) {
                console.error("Errore POST:", error);
                res.status(500).json({ error: "Errore durante l'inserimento" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Metodo ${req.method} non consentito`);
    }
}