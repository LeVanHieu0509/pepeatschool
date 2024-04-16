export interface ShowModal {
  type?: "add" | "fix" | "delete" | "detail" | "download" | null;
  show: boolean;
  data?: any;
  title?: string;
  onConfirm?: () => void;
}
