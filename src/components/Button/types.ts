export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    to?: string,
    className?: string,
    children?: React.ReactNode,
    color?: string,
}