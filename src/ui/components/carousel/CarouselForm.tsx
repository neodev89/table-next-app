import { freelanceTableSchemaProps } from "@/zod/freelanceTable";
import { Box, Grid } from "@mui/material";
import { common } from "@mui/material/colors";
import MappingTextField from "../custom-textField/mappingTextField";
import { Control } from "react-hook-form";

interface carouselProps {
    initializerFreelanceTable: freelanceTableSchemaProps;
    control: Control<freelanceTableSchemaProps>;
}

const CarouselData = ({
    initializerFreelanceTable,
    control
}: carouselProps) => {

    const arrayInitialState = Object.entries(initializerFreelanceTable).map(([K, V]) => ({
        [K]: V
    }));

    const fieldLabels: Record<string, string> = {
        businessYearStart: "Inizio anno fiscale",
        businessYearEnd: "Fine anno fiscale",
        companyStart: "Data di avvio anno aziendale",
        companyEnd: "Data di fine anno aziendale",
    };

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "50%",
            flexDirection: "row",
            justifyContent: "center",
            border: "2px solid blue",
            backgroundColor: common.white,
            p: 1,
            borderRadius: 4,
        }}>
            <Grid 
                container 
                spacing={1} 
                columns={4}
            >
                {
                    arrayInitialState.map((item, idx) => {
                        const description = Object.keys(item)[0];
                        console.log(description);
                        return (
                            <Grid size={4} key={`${idx}-${item}`}>
                                <MappingTextField
                                    control={control}
                                    name={String(idx)}
                                    rules={{ required: `${description} is required` }}
                                    type={"date"}
                                    label={`${fieldLabels[description]}`}
                                    fullWidth={true}
                                    fieldLabel={`${fieldLabels[description]}`}
                                    visible={true}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

export default CarouselData;