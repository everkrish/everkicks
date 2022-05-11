import Spinner from "src/reusable/Spinner";

interface LoadingContainerProps {
    children: React.ReactNode;
    isLoading: boolean;
}

export default function LoadingContainer({ children, isLoading }: LoadingContainerProps) {
    return <>{ isLoading ? <Spinner/> : children }</>;
}