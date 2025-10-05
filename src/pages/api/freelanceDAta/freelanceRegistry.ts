import connection from "@/database/connection";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { FreelanceRegistryProps } from "@/types/freelanceAppTypes";
import { NextApiRequest, NextApiResponse } from "next";

const handlerPostRegistry = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: "Not valid method"
        });
    } else {
        try {
            // presi i dati dal body
            const {
                nameUser,
                lastNameUser,
                taxID,
                vatNumber,
                birthDate,
                birthCityUser,
                countryUser,
                emailUser,
                passwordUser,
            } = req.body;

            // controllo se fosse un doppione
            const [existing] = await connection.query(
                `SELECT emailUser FROM FreelanceRegistry WHERE emailUser = ?`,
                [emailUser]
            );
            if (Array.isArray(existing) && existing.length > 0) {
                return res.status(409).json({
                    message: "Email already registered"
                });
            }

            // hash password and create ID
            const hashPassword = await bcrypt.hash(passwordUser, 10);
            const freelanceRegistryID = uuidv4();

            const inferData: FreelanceRegistryProps = {
                freelanceRegistryID,
                nameUser,
                lastNameUser,
                taxID,
                vatNumber,
                birthDate,
                birthCityUser,
                countryUser,
                emailUser,
                passwordUser: hashPassword
            }

            let postData = `
                INSERT INTO FreelanceRegistry
                (
                    freelanceRegistryID,
                    nameUser,
                    lastNameUser,
                    taxID,
                    vatNumber,
                    birthDate,
                    birthCityUser,
                    countryUser,
                    emailUser,
                    passwordUser
                ) VALUES (
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
                )`;

            await connection.query(postData, [
                inferData.freelanceRegistryID,
                inferData.nameUser,
                inferData.lastNameUser,
                inferData.taxID,
                inferData.vatNumber,
                inferData.birthDate,
                inferData.birthCityUser,
                inferData.countryUser,
                inferData.emailUser,
                inferData.passwordUser
            ]);

            res.status(200).json({
                message: "Post data is successfully!"
            });
        } catch (error) {
            res.status(500).json({
                message: "Post invalidate"
            });
        }
    }
};

export default handlerPostRegistry;