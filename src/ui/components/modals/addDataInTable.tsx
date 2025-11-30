import { Dialog, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

interface modalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    closed: () => void;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddDataInTable = ({
    open,
    setOpen,
    closed,
}: modalProps) => {
    
    <Dialog
        open={open}
        onClose={closed}
        slots={{
            transition: Transition
        }}
    >
        <DialogTitle>

        </DialogTitle>
    </Dialog>
}