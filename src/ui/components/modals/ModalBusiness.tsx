import FormAddTable from "@/ui/components/form-data-table/form-add-table";
import TableContainer from "../table-container/tableContainer";
import style from "./style.module.sass";
import CloseIcon from '@mui/icons-material/Close';

import { Box, Dialog, DialogContent, DialogTitle, IconButton, Paper, Slide, styled, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

interface modalProps {
  open: boolean;
  closed: () => void;
  className: string;
  setOpen?: (open: boolean) => void;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalBusiness = ({
  open,
  closed,
}: modalProps) => {

  const CustomPaper = styled(Paper)({
    position: 'absolute',
    minWidth: '100vw',
    height: 'calc(100vh - 100px)',
    top: '15%',
  });

  return (
    <Dialog
      open={open}
      onClose={closed}
      slots={{
        transition: Transition,
        paper: CustomPaper,
      }}
      slotProps={{
        container: {
          sx: {
            top: 0,
            right: 0,
            left: 0,
          }
        }
      }}

    >
      <DialogTitle>
        <Box className={style.div_title}>
          <Box className={style.title}>
            <Typography variant="body1" fontWeight={600}>
              I dati di inizio e fine dell'anno di attività della tua impresa
            </Typography>
          </Box>
          <Box className={style.close}>
            <IconButton onClick={() => {
              closed();
            }}>
              <CloseIcon color="error" fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TableContainer className={""}>
          <FormAddTable 
            classNameBoxCarousel={style.action} 
            classNameActionCarousel={style.action_carousel} 
          />
        </TableContainer>
        
      </DialogContent>
    </Dialog>
  );
};

export default ModalBusiness;