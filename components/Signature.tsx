export default function Signature({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20,50 C30,40 50,20 60,30 C70,40 50,60 40,50 C30,40 60,10 80,20 C100,30 90,60 110,50 C130,40 140,20 160,30 C170,35 160,50 180,45" />
            <path d="M40,55 C60,55 100,50 140,55" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
    );
}
