import FormAddTable from "@/ui/pages/form-add-table";
import TableContainer from "../table-container/tableContainer";

import { Box, Dialog, DialogContent, DialogTitle, Paper, PaperProps, Slide, styled } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactNode } from "react";

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
  className,
}: modalProps) => {

  const CustomPaper = styled(Paper)({
  minWidth: '100vw',
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
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
        root: {
          sx: {
            width: 700,
            height: 700,
            top: "12%",
            right: 0,
            left: "27%",
          }
        }
      }}

    >
      <DialogTitle>
        I dati di inizio e fine dell'anno di attività della tua impresa
      </DialogTitle>
      <DialogContent>
        <TableContainer className={className}>
          <FormAddTable />
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};

export default ModalBusiness;