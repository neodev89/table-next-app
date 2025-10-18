import { getInitializedAppData } from "@/connection/data-source";
import { FreelanceRegistryEntity } from "@/entity/freelanceRegistry";

// API POST per salvare l'utente
export async function POST(req: Response) {
    const { email, password } = await  req.json();

    const dataSource = await getInitializedAppData();
    const findFreelance = dataSource.getRepository(FreelanceRegistryEntity);
    const freelancer = await findFreelance.findOneBy({ emailUser: email });
}