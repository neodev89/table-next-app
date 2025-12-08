import { Box } from "@mui/material"
import { common } from "@mui/material/colors"

const CarouselBusiness = () => {
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            border: "2px solid blue",
            backgroundColor: common.white,
            p: 1,
            borderRadius: 4,
        }}>
            Carousel business
        </Box>
    );
};

export default CarouselBusiness;