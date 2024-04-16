import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { useTheme } from "styled-components";
import { Flex } from "styles/common";
import { DialogWrapper } from "./styled";

const ModalCustom = ({
  children,
  title,
  show,
  data,
  type,
  onCloseModal,
  secondaryBtn,
  primaryBtn,
}: {
  children: React.ReactNode | React.ReactNode[];
  data?: any;
  show?: boolean;
  title?: string;
  type?: string;
  onCloseModal?: () => void;
  action?: (a: any, b: any) => Promise<any>;
  secondaryBtn?: {
    disable?: boolean;
    text?: string;
    onClick?: () => void;
  };
  primaryBtn?: {
    disable?: any;
    text?: string;
    onClick?: () => void;
  };
}) => {
  const theme = useTheme();

  return (
    <Dialog
      placeholder
      className="overflow-auto relative"
      aria-labelledby="modal-title"
      open={show!}
      handler={secondaryBtn && (secondaryBtn.onClick as any)}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}>
      <DialogWrapper>
        <DialogHeader
          placeholder
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <Flex justify="space-between" className="w-full">
            <Typography
              placeholder
              variant="h6"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              {title}
            </Typography>

            {onCloseModal && (
              <IconButton
                placeholder
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={onCloseModal}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-7 w-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            )}
          </Flex>
        </DialogHeader>
        <DialogBody
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder>
          {children}
        </DialogBody>

        {secondaryBtn || primaryBtn ? (
          <DialogFooter
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder>
            <Flex gap={16} gapMb={16}>
              {secondaryBtn ? (
                <Button
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder
                  disabled={secondaryBtn?.disable}
                  onClick={secondaryBtn?.onClick}
                  style={{
                    width: "140px",
                    color: "#ffffff",
                    background: theme.color.status.red,
                  }}>
                  {secondaryBtn?.text}
                </Button>
              ) : null}
              {primaryBtn ? (
                <Button
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder
                  disabled={primaryBtn?.disable as any}
                  style={{
                    width: "140px",
                    color: "#ffffff",
                    background: theme.color.status.primary,
                  }}
                  onClick={primaryBtn?.onClick as any}>
                  {primaryBtn?.text}
                </Button>
              ) : null}
            </Flex>
          </DialogFooter>
        ) : null}
      </DialogWrapper>
    </Dialog>
  );
};

export default ModalCustom;
