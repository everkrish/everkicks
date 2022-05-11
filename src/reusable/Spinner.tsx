import "src/reusable/Spinner.css";

export default function Spinner() {
    return <div className="lds-dual-ring" aria-busy={true}></div>;
}