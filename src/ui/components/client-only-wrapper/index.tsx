import dynamic from "next/dynamic";

{/** Qui importerò e avvolgerò tutti i component che non
    hanno bisogno di essere renderizzati lato server 
*/}

// Modals
const DynamicModalBusiness = dynamic(
    () => import('../modals/ModalBusiness'),
    { ssr: false }
);

// CircularProgress
const SafeDynamicCircular = dynamic(
    () => import('@mui/material/CircularProgress'),
    { ssr: false }
);

export {
    DynamicModalBusiness,
    SafeDynamicCircular,
}